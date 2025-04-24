import axios from "axios";

const backendApi = axios.create({
    baseURL: "http://localhost:8080/ws", // o la URL de tu WebService
    headers: {
        "Content-Type": "text/xml", // SOAP típicamente usa XML
    },
});

export default backendApi;
