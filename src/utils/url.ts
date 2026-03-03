import { isProduction } from './environment';

export const productionUrl = import.meta.env.VITE_PRODUCTION_API_URL;
export const developmentUrl = import.meta.env.VITE_DEVELOPMENT_API_URL;

export const getBaseUrl = (): string => {
    return isProduction() ? productionUrl : developmentUrl;
};
