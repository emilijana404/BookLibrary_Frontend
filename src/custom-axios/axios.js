import axios from "axios";

const instance = axios.create({
    baseURL: 'https://book-library--backend.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default instance;