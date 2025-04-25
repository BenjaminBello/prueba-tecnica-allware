'use client';

import { columns, DataTable } from '@/components/rent-car';
import { RentCarForm } from '@/components/rent-car/RentCarForm';
import Loader from '@/components/shared/Loader';
import { useVehicles } from '@/hooks';
import { Toaster } from 'sonner';

export default function Home() {

  const { getVechiclesQuery } = useVehicles();

  if (getVechiclesQuery.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader size='large' />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <RentCarForm />
      <Toaster />
      <DataTable columns={columns} data={getVechiclesQuery.data?.data ?? []} />
    </div>
  );
}
