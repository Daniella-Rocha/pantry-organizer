import axios from 'axios';

export const requestPantryOrganizer = axios.create({
    baseURL: `https://lrm3e.wiremockapi.cloud`,
    headers: {
        "Content-Type": "application/json",
    }
});


