import { columns } from '@/components/rent-car/columns'
import { DataTable } from '@/components/rent-car/data-table'
import { rentedCars } from '@/data/cars.data'
import { useGetVehicles } from '@/hooks/useGetVehicles'


export const RentCarPage = () => {

    const { getVehiclesQuery } = useGetVehicles()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={rentedCars} />
        </div>
    )
}