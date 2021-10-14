/*
 * JAMF index
 */

import React, { useEffect } from 'react';
import { useDlgJamf } from '@config/jamf';

const JamfStart = () => {
    const title = "JAMF Dashboard";

    useEffect(async () => {
        await fetch('/api/jamf/login');
    }, []);

    const getComputers = async () => {
        const res = await fetch('/api/jamf/computers');
        const data = await res.json();
        console.log(data);
    };

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={getComputers}>Get</button>
        </div>
    )
};

export default JamfStart;