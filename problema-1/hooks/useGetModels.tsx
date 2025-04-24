'use client';

import { getModelsAction } from '@/actions/get-models.action';
import { useQuery } from '@tanstack/react-query';

export const useGetModels = (id?: number) => {

    const getModelsQuery = useQuery({
        queryKey: ["models", id],
        queryFn: () => getModelsAction(id!),
        enabled: !!id,
    })

    return {
        getModelsQuery
    }
}