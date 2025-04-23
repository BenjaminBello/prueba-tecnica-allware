package vehiculos.service;
import vehiculos.model.Vehiculo;
import vehiculos.dao.VehiculoDAO;

import javax.jws.WebService;
import javax.jws.WebMethod;
import java.util.List;



@WebService(targetNamespace = "http://vehiculos")
public class VehiculoService {

    @WebMethod
    public List<Vehiculo> listarVehiculos() {
        VehiculoDAO dao = new VehiculoDAO();
        return dao.listarVehiculos();
    }
}