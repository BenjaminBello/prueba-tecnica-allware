package vehiculos;

import vehiculos.service.VehiculoService;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import javax.xml.ws.Endpoint;

@WebListener
public class SoapWebServicePublisher implements ServletContextListener {

    private Endpoint endpoint;

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        endpoint = Endpoint.publish("/ws/vehiculos", new VehiculoService());
        System.out.println("Servicio SOAP desplegado con éxito.");
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        if (endpoint != null) {
            endpoint.stop();
        }
    }
}
