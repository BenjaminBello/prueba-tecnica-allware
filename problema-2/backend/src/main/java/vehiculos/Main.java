package vehiculos;

import vehiculos.service.VehiculoService;

import javax.xml.ws.Endpoint;

public class Main {
    public static void main(String[] args) {
        String url = "http://localhost:8080/vehiculos";
        Endpoint.publish(url, new VehiculoService());
        System.out.println("Servicio SOAP publicado en: " + url);
    }
}