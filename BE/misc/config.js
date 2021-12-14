import dotenv from 'dotenv';

dotenv.config();

export const ENV_VARS = {
    CLIENT_ID : process.env.CLIENT_ID,
    CLIENT_SECRET : process.env.CLIENT_SECRET,
    CALLBACK_URL : process.env.CALLBACK_URL
};