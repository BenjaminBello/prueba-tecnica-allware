import axios from "axios";

const backendApi = axios.create({
    baseURL: "/ws", // o la URL de tu WebService
    headers: {
        "Content-Type": "text/xml", // SOAP típicamente usa XML
        SOAPAction: '""', // Acción SOAP, si es necesario
    },
});

export default backendApi;
