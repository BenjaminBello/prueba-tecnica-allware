
import { RentedCar } from '@/interfaces/rent-car.interface'
import { currencyFormatter } from '@/lib/currencyFormatter'
import { ColumnDef, FilterFn, Row } from "@tanstack/react-table"
import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui/button'

const myCustomFilterFn: FilterFn<RentedCar> = (row: Row<RentedCar>, columnId: string, filterValue: string) => {
    filterValue = filterValue.toLowerCase();

    if (row.original.sellerName.toLowerCase().includes(filterValue)) {
        return true;
    }
    if (row.original.sellerRut.includes(filterValue)) {
        return true;
    }
    if (row.original.numberPlate.toLowerCase().includes(filterValue)) {
        return true;
    }
    return false;
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
        cell: ({ row }) => {
            return (
                <span className='text-slate-800 font-medium'>
                    {row.getValue('sellerRut')}
                </span>
            )
        }
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
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Color vehículo
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <span className='capitalize'>
                    {row.getValue('color')}
                </span>
            )
        }
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

]
