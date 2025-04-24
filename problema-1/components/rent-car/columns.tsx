"use client"
import { RentedCar } from '@/interfaces/rent-car.interface'
import { ColumnDef, FilterFn, Row } from "@tanstack/react-table"
import { ArrowUpDown, Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import { currencyFormatter } from '@/lib/currencyFormatter'
import { deleteVehicleAction } from '@/actions/delete-vehicle.action'
import { toast } from 'sonner'

const myCustomFilterFn: FilterFn<RentedCar> = (row: Row<RentedCar>, columnId: string, filterValue: string, addMeta: (meta: any) => void) => {
    filterValue = filterValue.toLowerCase();

    if (row.original.sellerName.toLowerCase().includes(filterValue)) {
        return true;
    }
    if (row.original.sellerRut.includes(filterValue)) {
        return true;
    }
    if (row.original.numberPlate.includes(filterValue)) {
        return true;
    }
    return false;
}

const handleDeleteVehicle = async (id: number) => {
    const resp = await deleteVehicleAction(id);
    if (resp) {
        toast('Vehículo eliminado correctamente');
    } else {
        toast('Error al eliminar el vehículo');
    }
}

export const columns: ColumnDef<RentedCar>[] = [
    {
        accessorKey: "sellerName",
        filterFn: myCustomFilterFn,
        header: "Nombre",
    },
    {
        accessorKey: "sellerRut",
        filterFn: myCustomFilterFn,
        header: "Rut vendedor",
    },
    {
        accessorKey: "numberPlate",
        filterFn: myCustomFilterFn,
        header: "Patente vehículo",
    },
    {
        accessorKey: "brand",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Marca vehículo
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "model",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Modelo vehículo
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "color",
        header: "Color vehículo",
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Precio
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <span className='text-slate-800 font-bold'>
                    {currencyFormatter(row.getValue('price'))}
                </span>
            )
        },
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {

            return (
                <Button variant={'ghost'} className='cursor-pointer' onClick={() => handleDeleteVehicle(row.original.id!)} >
                    <Trash2 className='scale-150' color='red' />
                </Button>
            )
        },
    },
]
