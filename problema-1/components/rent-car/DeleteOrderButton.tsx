'use client';

import { RentedCar } from '@/interfaces/rent-car.interface';
import { Row } from '@tanstack/react-table';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useDeleteVehicle } from '@/hooks/useDeleteVehicle';

interface Props {
    row: Row<RentedCar>
}
export const DeleteOrderButton = ({ row }: Props) => {

    const { deleteVehicleMutation } = useDeleteVehicle()

    return (
        <Button
            variant={'ghost'}
            className='cursor-pointer'
            onClick={() => deleteVehicleMutation.mutate(row.original.id!)}
            disabled={deleteVehicleMutation.isPending}
        >
            <Trash2 className='scale-150' color='red' />
        </Button>
    )
}