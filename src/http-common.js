import axios from 'axios';

export default axios.create({
    // baseUrl: "http://localhost:18080",
    baseUrl: "https://file.upload.ansabr.tech",
    headers: {
        "Content-Type": "application/json"
    }
})