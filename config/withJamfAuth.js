/*
 * Jamf Auth HOC
 */
import { JAMF_DLG_TOKEN, JAMF_BOS_TOKEN, options } from '@config/cookies';
import { serialize } from 'cookie';

const getHeaders = (auth) => {
    return new Headers ({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth
    });
};

const getUrl = (domain) => {
    switch (domain) {
        case 'dlg':
            return process.env.JAMF_API_DLG_URL;
        case 'bos':
            return process.env.JAMF_API_BOS_URL;
        default:
            return null;
    };
};

const withJamfAuth = handler => {
    return async (ctx) => {
        const { req, res, query } = ctx;
        const { domain } = query || {};
        const { cookies } = req || {};

        const url = getUrl(domain);

        const auth = `Basic ${process.env.JAMF_API_BOS_AUTH}`;

        const headers = getHeaders(auth);

        const jamfRes = await fetch(`${url}/api/v1/auth/token`, { method: 'POST', headers });
        const { token } = await jamfRes.json();

        res.setHeader('Set-Cookie', serialize(JAMF_BOS_TOKEN, token, options));

        return handler(ctx);
    }
}

export default withJamfAuth;