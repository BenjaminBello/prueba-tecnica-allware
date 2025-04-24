package vehiculos;

import vehiculos.service.VehiculoService;

import javax.xml.ws.Endpoint;


public class Main {
    public static void main(String[] args) {
        String url = "http://localhost:8080/ws/vehiculos";  // El puerto puede ser cualquier otro si no deseas cambiarlo
        Endpoint.publish(url, new VehiculoService());
        System.out.println("Servicio SOAP publicado en: " + url);

    }
}
