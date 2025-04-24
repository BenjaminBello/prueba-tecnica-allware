"use server";
import { RentedCarResponse } from "@/interfaces/rent-car-response.interface";
import { prisma } from "@/lib/prisma";
import { fromRentedCarResponseToRentedCar } from "@/mappers/rented-car.mapper";

export const getVehiclesAction = async () => {
    try {
        const vehicles = await prisma.vehiculo.findMany({
            orderBy: {
                fecha_creacion: "desc",
            },
            include: {
                modelo: {
                    include: {
                        marca: true,
                    },
                },
                vendedor: true,
            },
        });
        const data = fromRentedCarResponseToRentedCar(
            vehicles as RentedCarResponse[],
        );
        return {
            data,
        };
    } catch (error) {
        console.log(error);
        return {
            data: [],
        };
    }
};
