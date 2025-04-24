"use server";
import { prisma } from "@/lib/prisma";

export const getModelsAction = async (brandId: number) => {
    try {
        const models = await prisma.modelo.findMany({
            where: {
                marca_id: brandId,
            },
        });
        return models;
    } catch (error) {
        console.error("Error fetching models:", error);
        return [];
    }
};
