import { Axios } from "axios";

export const ArtiSphereApi = new Axios({
    baseURL:"https://artisphere-api.onrender.com",
    headers: {
        'Content-Type': 'application/json',
    },
})

