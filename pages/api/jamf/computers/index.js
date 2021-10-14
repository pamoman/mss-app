/*
 * Jamf- Computers
 */

import { useDlgJamf } from '@config/jamf';

export default async (req, res) => {
    const { url, headers } = useDlgJamf('/computers-inventory');

    const jamfRes = await fetch(url, { method: 'GET', headers });
    const data = await jamfRes.json();

    res.statusCode = 200;
    res.json({ success: true, data });
}