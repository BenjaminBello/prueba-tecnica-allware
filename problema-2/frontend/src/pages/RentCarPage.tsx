import { columns } from '@/components/rent-car/columns'
import { DataTable } from '@/components/rent-car/data-table'
import Loader from '@/components/shared/Loader'
import { useGetVehicles } from '@/hooks/useGetVehicles'


export const RentCarPage = () => {

    const { getVehiclesQuery } = useGetVehicles()

    if (getVehiclesQuery.isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader size='large' />
            </div>
        );
    }

    return (
        <DataTable columns={columns} data={getVehiclesQuery.data ?? []} />
    )
}