import backendApi from "@/api/backendApi";

const soapEnvelope = `
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://vehiculos">
    <soapenv:Header/>
    <soapenv:Body>
        <web:listarVehiculos/>
    </soapenv:Body>
</soapenv:Envelope>
`;

export const getVehiclesAction = async () => {
    try {
        const response = await backendApi.post("/vehiculos", soapEnvelope, {
            headers: {
                "Content-Type": "text/xml;",
                "SOAPAction": "listarVehiculos", // Asegúrate de agregar este encabezado si es necesario en el servidor
            },
        });

        console.log("🚀 ~ getVehiclesAction ~ response:", response);
        // const parser = new DOMParser();
        // const xmlDoc = parser.parseFromString(response.data, "text/xml");
        // const vehicles = xmlDoc.getElementsByTagName("vehiculo");
        // const vehiclesArray = Array.from(vehicles).map((vehicle) => {
        //     return {
        //         sellerName:
        //             vehicle.getElementsByTagName("nombre")[0].textContent,
        //         sellerRut: vehicle.getElementsByTagName("rut")[0].textContent,
        //         numberPlate:
        //             vehicle.getElementsByTagName("patente")[0].textContent,
        //         brand: vehicle.getElementsByTagName("marca")[0].textContent,
        //         model: vehicle.getElementsByTagName("modelo")[0].textContent,
        //         color: vehicle.getElementsByTagName("color")[0].textContent,
        //     };
        // });
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        throw new Error("Failed to fetch vehicles");
    }
};
