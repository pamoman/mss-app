/*
 * Cookie - config
 */

import { useCookies } from 'react-cookie';

export const JAMF_TOKEN = "jamfToken";

export const options = {
    sameSite: 'strict',
    maxAge: 30 * 60,
    path: '/',
    secure: true,
    httpOnly: true
};