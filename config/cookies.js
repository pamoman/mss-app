/*
 * Cookie - config
 */

import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

export const JAMF_DLG_TOKEN = "jamfDlgToken";

export const JAMF_BOS_TOKEN = "jamfBosToken";

export const options = {
    sameSite: 'strict',
    maxAge: 30 * 60,
    path: '/',
    secure: true,
    httpOnly: true
};

export const getCookie = (cookie, name) => {
    const cookies = new Cookies(cookie);

    return cookies.get(name);
};