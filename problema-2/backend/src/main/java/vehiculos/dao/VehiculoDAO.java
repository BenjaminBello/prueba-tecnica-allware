package vehiculos.dao;

import vehiculos.model.Vehiculo;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;


public class VehiculoDAO {
    private final String url = "jdbc:postgresql://localhost:5432/vehiculosdb";
    private final String user = "admin";
    private final String password = "admin";

    public List<Vehiculo> listarVehiculos() {
        List<Vehiculo> vehiculos = new ArrayList<>();

        String query =
                "SELECT v.patente, ma.nombre AS marca, mo.nombre AS modelo, v.precio, v.fecha_creacion, v.color\n" +
                        "FROM vehiculo v\n" +
                        "JOIN modelo mo ON v.modelo_id = mo.id\n" +
                        "JOIN marca ma ON mo.marca_id = ma.id\n" +
                        "ORDER BY v.fecha_creacion DESC";


        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement stmt = conn.prepareStatement(query);
             ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                String patente = rs.getString("patente");
                String marca = rs.getString("marca");
                String modelo = rs.getString("modelo");
                int precio = rs.getInt("precio");
                String color = rs.getString("color");

                Date fechaCreacionSQL = rs.getDate("fecha_creacion");

                String fechaCreacion = fechaCreacionSQL.toLocalDate().toString(); // Devuelve "yyyy-MM-dd"
                vehiculos.add(new Vehiculo(patente, marca, modelo, precio, fechaCreacion, color));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return vehiculos;
    }
}
