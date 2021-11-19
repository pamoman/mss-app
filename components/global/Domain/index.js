/*
 * Domain
 */

import { createContext, useContext } from 'react';

export const DomainContext = createContext();

export const DomainProvider = DomainContext.Provider;

export const useDomain = () => {
    return useContext(DomainContext);
};