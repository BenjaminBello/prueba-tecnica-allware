'use client';
import { columns } from '@/components/rent-car/columns';
import { DataTable } from '@/components/rent-car/data-table';
import { RentCarForm } from '@/components/rent-car/RentCarForm';
import { useVehicles } from '@/hooks/useGetVehicles';
import { Toaster } from 'sonner';

export default function Home() {

  const { getVechiclesQuery } = useVehicles();

  if (getVechiclesQuery.isLoading) {
    return <div className="container mx-auto py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <RentCarForm />
      <Toaster toastOptions={{
        classNames: {
          success: 'bg-green-500 text-white',
          error: 'bg-red-500 text-white',
        }
      }} />
      <DataTable columns={columns} data={getVechiclesQuery.data?.data ?? []} />
    </div>
  );
}
