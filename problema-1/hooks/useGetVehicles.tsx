'use client';
import { getVehiclesAction } from '@/actions/get-vehicles.action';
import { useQuery } from '@tanstack/react-query';

export const useVehicles = () => {

  const getVechiclesQuery = useQuery({
    queryFn: () => getVehiclesAction(),
    queryKey: ["vehicles"],
  })



  return {
    getVechiclesQuery,
  }

}