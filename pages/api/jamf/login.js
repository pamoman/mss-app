/*
 * Jamf- Login
 */

import { useDlgJamf } from '@config/jamf';
import { JAMF_TOKEN, options } from '@config/cookies';
import { serialize } from 'cookie';

export default async (req, res) => {
    const { url, headers } = useDlgJamf('/auth/token');

    const jamfRes = await fetch(url, { method: 'POST', headers });
    const { token } = await jamfRes.json();

    res.setHeader('Set-Cookie', serialize(JAMF_TOKEN, token, options));

    res.statusCode = 200;
    res.json({ success: true });
};