import { deleteVehicleAction } from '@/actions/delete-vehicle.action';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { CheckCircle, X } from 'lucide-react';
import { toast } from 'sonner';

export const useDeleteVehicle = () => {
    const queryClient = useQueryClient()

    const deleteVehicleMutation = useMutation({
        mutationFn: (id: number) => deleteVehicleAction(id),
        onSuccess: () => {
            toast("Vehículo eliminado correctamente", {
                style: {
                    backgroundColor: 'green',
                    color: 'white',
                },
                icon: <CheckCircle className='text-white mr-2' />,
            });
            queryClient.invalidateQueries({ queryKey: ["vehicles"] })
        },
        onError: () => toast("Error al eliminar el vehículo", {
            style: {
                backgroundColor: 'red',
                color: 'white',
            },
            icon: <X className='text-white mr-2' />,
        })
    })

    return {
        deleteVehicleMutation
    }
}