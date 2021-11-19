/* 
 * API - Apps
 */

const store = require('app-store-scraper');

const searchAppStore = async (req, res) => {
    const { id } = req.query;

    const data = id && await store.app({ id, country: "se" });

    const privacy = id && await store.privacy({ id, country: "se" });

    res.json({data, privacy});
};

export default searchAppStore;