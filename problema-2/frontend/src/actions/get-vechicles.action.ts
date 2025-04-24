import backendApi from "@/api/backendApi";
import { parseVehicles } from "@/lib/parseVehicles";

const soapEnvelope =
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:web="http://vehiculos">
    <soapenv:Header/>
    <soapenv:Body>
        <web:listarVehiculos/>
    </soapenv:Body>
</soapenv:Envelope>
`;

export const getVehiclesAction = async () => {
    try {
        const { data } = await backendApi.post("/vehiculos", soapEnvelope);
        const parsed = parseVehicles(data);
        return parsed;
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        throw new Error("Failed to fetch vehicles");
    }
};
