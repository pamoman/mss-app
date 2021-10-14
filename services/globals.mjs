/*
 * Get globals
 */

import dotenv from "dotenv";
import fs from 'fs';
import fetch from 'node-fetch';
import { pipeline } from 'stream';
import { promisify } from 'util'

dotenv.config();

/*
 * Get globals
 */
const getGlobals = async () => {
    const dataFolder = process.env.GLOBALS_DATA_PATH;
    const publicFolder = "./public";
    const globalsPath = `${dataFolder}/globals.json`;
    const manifestPath = `${publicFolder}/manifest.json`;
    const finished = () => console.info("\nFinished downloading global data!\n");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.GLOBALS_API_ROUTE}`);
    const data = await res.json();
    const { logo, pwa } = data?.header;

    /*
     * Write globals data to a local json file
     */
    fs.writeFile(
        globalsPath,
        JSON.stringify(data, null, 4),
        err => {
            if (err) throw err;

            console.info(`Global data written to file ${globalsPath}`);
        },
    );
    
    /*
     * Get site logo 
     */
    if (logo) {
        const logoUrl = logo?.url;
        const logoName = logo?.name;
    
        const streamPipeline = promisify(pipeline);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${logoUrl}`);

        if (!res.ok) throw new Error(`Unexpected response ${res.statusText}`);

        try {
            await streamPipeline(
                res.body,
                fs.createWriteStream(`./public/${logoName}`)
            );
        } catch (err) {
            throw new Error(`Unexpected write error: ${err}`)
        } finally {
            console.info(`Logo ${logoName} copied to the ${publicFolder} folder`);
        }
    }

    /*
     * Get site pwa
     */
    if (pwa) {
        const { manifest, icons } = pwa;

        fs.writeFile(
            manifestPath,
            JSON.stringify(manifest, null, 4),
            err => {
                if (err) throw err;
    
                console.info(`Manifest written to file ${manifestPath}\n`);
            },
        );
        
        let processed = 0;
    
        icons.forEach(async (icon, i) => {
            const imageUrl = icon?.url;
            const imageName = icon?.name;
    
            const streamPipeline = promisify(pipeline);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`);
    
            if (!res.ok) throw new Error(`Unexpected response ${res.statusText}`);
    
            try {
                await streamPipeline(
                    res.body,
                    fs.createWriteStream(`./public/${imageName}`)
                );
            } catch (err) {
                throw new Error(`Unexpected write error: ${err}`)
            } finally {
                console.info(`Images ${imageName} copied to the ${publicFolder} folder`);
            }
    
            processed++;
    
            processed == icons.length && finished();
        })
    };
};

/*
 * Main function to call on load
 */
const main = async () => {
	try {
		await getGlobals()
	} catch (err) {
		throw new Error(err)
	}
}

main();