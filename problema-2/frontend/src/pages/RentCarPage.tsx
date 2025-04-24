import { columns } from '@/components/rent-car/columns'
import { DataTable } from '@/components/rent-car/data-table'
import { useGetVehicles } from '@/hooks/useGetVehicles'


export const RentCarPage = () => {

    const { getVehiclesQuery } = useGetVehicles()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={getVehiclesQuery.data ?? []} />
        </div>
    )
}