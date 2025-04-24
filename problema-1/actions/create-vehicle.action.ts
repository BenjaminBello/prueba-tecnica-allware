"use server";
import { RentedCar } from "@/interfaces/rent-car.interface";
import { prisma } from "@/lib/prisma";

export const createVehicleAction = async (data: RentedCar) => {
    const {
        color,
        numberPlate,
        price,
        sellerRut,
        sellerName,
    } = data;
    try {
        let seller = await prisma.vendedor.findUnique({
            where: {
                rut: data.sellerRut,
            },
        });
        if (!seller) {
            seller = await prisma.vendedor.create({
                data: {
                    rut: sellerRut,
                    nombre: sellerName,
                },
            });
        }

        await prisma.vehiculo.create({
            data: {
                patente: numberPlate,
                color: color.toLowerCase(),
                vendedor_id: seller.id,
            },
        });
    } catch (error) {
    }
};
