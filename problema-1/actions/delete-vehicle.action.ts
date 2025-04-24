"use server";
import { prisma } from "@/lib/prisma";

export const deleteVehicleAction = async (id: number) => {
    try {
        await prisma.vehiculo.delete({
            where: {
                id,
            },
        });
        return true;
    } catch (error) {
        console.error("Error deleting vehicle:", error);
        return false;
    }
};
