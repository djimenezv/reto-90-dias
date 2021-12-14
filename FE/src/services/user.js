import Axios from 'axios';
import { CONFIG_VARS } from '../config';

export const getUserProfile = async () => {

    const profile = await Axios.get(`${CONFIG_VARS.API_URL}/me`, {withCredentials: true}); 
    return profile
                ? profile.data
                : null;
}