"use server";
import { CreateVehicleInterface } from "@/interfaces";
import { prisma } from "@/lib/prisma";

export const createVehicleAction = async (data: CreateVehicleInterface) => {
    const {
        color,
        numberPlate,
        price,
        sellerRut,
        sellerName,
        modelId,
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
                precio: price,
                modelo_id: modelId,
            },
        });
    } catch (error) {
        console.error("Error creating vehicle:", error);
        throw new Error("Error creating vehicle");
    }
};
