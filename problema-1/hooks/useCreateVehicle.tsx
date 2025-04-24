'use client';

import { createVehicleAction } from '@/actions/create-vehicle.action';
import { CreateVehicleInterface } from '@/interfaces';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CheckCircle, X } from 'lucide-react';
import { toast } from 'sonner';

export const useCreateVehicle = () => {

    const queryClient = useQueryClient();
    const createVehicleMutation = useMutation({
        mutationFn: (data: CreateVehicleInterface) => createVehicleAction(data),
        onSuccess: () => {
            toast("Vehículo añadido correctamente", {
                style: {
                    backgroundColor: 'green',
                    color: 'white',
                },
                icon: <CheckCircle className='text-white mr-2' />,
            });
            queryClient.invalidateQueries({ queryKey: ['vehicles'] });
        },
        onError: () => toast("Error al añadir el vehículo", {
            style: {
                backgroundColor: 'red',
                color: 'white',
            },
            icon: <X className='text-white mr-2' />,
        })
    })


    return {
        createVehicleMutation
    }
}