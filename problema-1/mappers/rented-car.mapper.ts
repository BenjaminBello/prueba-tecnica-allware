import { RentedCarResponse } from "@/interfaces/rent-car-response.interface";
import { RentedCar } from "@/interfaces/rent-car.interface";

export const fromRentedCarResponseToRentedCar = (
    rentedCarsResp: RentedCarResponse[],
): RentedCar[] => {
    return rentedCarsResp.map((rentedCar) => {
        return {
            id: rentedCar.id,
            brand: rentedCar.modelo.marca.nombre,
            model: rentedCar.modelo.nombre,
            color: rentedCar.color,
            price: rentedCar.precio,
            numberPlate: rentedCar.patente,
            sellerName: rentedCar.vendedor.nombre,
            sellerRut: rentedCar.vendedor.rut,
        };
    });
};
