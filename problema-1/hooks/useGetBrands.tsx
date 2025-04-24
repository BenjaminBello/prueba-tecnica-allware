'use client';

import { getBrandsAction } from '@/actions/get-brands.action';
import { useQuery } from '@tanstack/react-query';

export const useGetBrands = () => {


    const getBrandsQuery = useQuery({
        queryKey: ["brands"],
        queryFn: getBrandsAction
    })

    return {
        getBrandsQuery,
    }
}