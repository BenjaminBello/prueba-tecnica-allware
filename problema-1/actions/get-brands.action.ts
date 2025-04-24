"use server";
import { prisma } from "@/lib/prisma";

export const getBrandsAction = async () => {
    try {
        const resp = await prisma.marca.findMany();
        return resp;
    } catch (error) {
        console.error("Error fetching brands:", error);
        return null;
    }
};
