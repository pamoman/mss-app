/*
 * Jamf API
 */

export const useDlgJamf = (path) => {
    const url = "https://dlg.jamfcloud.com/api/v1" + path;
    
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${process.env.JAMF_API_DLG_AUTH}`
    });

    return { headers, url };
}

export const useBosJamf = (path) => {
    const url = process.env.JAMF_API_BOS_URL + path;

    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${process.env.JAMF_API_BOS_AUTH}`
    });

    return { headers, url };
}