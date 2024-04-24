import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const fetchRodolfo = (symbol: string)  => {
   return apiClient.get<any>(`https://rvh98qbf-44321.brs.devtunnels.ms/Share/${symbol}`);
}

