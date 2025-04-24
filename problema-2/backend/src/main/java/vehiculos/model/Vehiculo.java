package vehiculos.model;

public class Vehiculo {

    private String patente;
    private String marca;
    private String modelo;
    private int precio;
    private String fechaCreacion;
    private String color;
    private String nombreVendedor;
    private String rutVendedor;

    public Vehiculo() {
    }

    public Vehiculo(String patente, String marca, String modelo, int precio, String fechaCreacion, String color, String nombreVendedor, String rutVendedor) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.fechaCreacion = fechaCreacion;
        this.color = color;
        this.nombreVendedor = nombreVendedor;
        this.rutVendedor = rutVendedor;
    }

    public String getPatente() {
        return patente;
    }

    public void setPatente(String patente) {
        this.patente = patente;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public String getNombreVendedor() {
        return nombreVendedor;
    }

    public void setNombreVendedor(String nombreVendedor) {
        this.nombreVendedor = nombreVendedor;
    }

    public String getRutVendedor() {
        return rutVendedor;
    }

    public void setRutVendedor(String rutVendedor) {
        this.rutVendedor = rutVendedor;
    }

    @Override
    public String toString() {
        return "Vehiculo{" +
                "patente='" + patente + '\'' +
                ", marca='" + marca + '\'' +
                ", modelo='" + modelo + '\'' +
                ", precio=" + precio +
                ", fechaCreacion=" + fechaCreacion +
                ", color='" + color + '\'' +
                ", nombreVendedor='" + nombreVendedor + '\'' +
                ", rutVendedor='" + rutVendedor + '\'' +
                '}';
    }
}
