import axios from 'axios';
import { getBaseUrl } from './url';

export const api = axios.create({ baseURL: getBaseUrl() });
