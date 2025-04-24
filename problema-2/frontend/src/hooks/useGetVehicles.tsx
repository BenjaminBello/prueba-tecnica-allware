import { getVehiclesAction } from '@/actions/get-vechicles.action'
import { useQuery } from '@tanstack/react-query'

export const useGetVehicles = () => {

    const getVehiclesQuery = useQuery({
        queryKey: ['vehicles'],
        queryFn: getVehiclesAction,
    })

    return {
        getVehiclesQuery
    }
}