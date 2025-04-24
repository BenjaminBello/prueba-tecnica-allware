import { RentedCar } from "@/interfaces/rent-car.interface";

export function parseVehicles(xml: string): RentedCar[] {
    const doc = new DOMParser().parseFromString(xml, "text/xml");
    const items = Array.from(doc.getElementsByTagName("return"));

    return items.map((el) => ({
        color: el.querySelector("color")?.textContent ?? "",
        brand: el.querySelector("marca")?.textContent ?? "",
        model: el.querySelector("modelo")?.textContent ?? "",
        numberPlate: el.querySelector("patente")?.textContent ?? "",
        price: Number(el.querySelector("precio")?.textContent),
        sellerName: el.querySelector("nombreVendedor")?.textContent ?? "",
        sellerRut: el.querySelector("rutVendedor")?.textContent ?? "",
    }));
}
