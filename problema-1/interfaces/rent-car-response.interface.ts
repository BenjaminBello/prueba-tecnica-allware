export interface RentedCarResponse {
    id: number;
    patente: string;
    precio: number;
    fecha_creacion: Date;
    color: string;
    modelo_id: number;
    vendedor_id: number;
    modelo: Modelo;
    vendedor: Vendedor;
}

export interface Modelo {
    id: number;
    nombre: string;
    marca_id: number;
    marca: Marca;
}

export interface Vendedor {
    id: number;
    nombre: string;
    rut: string;
}

export interface Marca {
    id: number;
    nombre: string;
}
