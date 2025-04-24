'use client';

import { columns, DataTable } from '@/components/rent-car';
import { RentCarForm } from '@/components/rent-car/RentCarForm';
import { useVehicles } from '@/hooks';
import { Toaster } from 'sonner';

export default function Home() {

  const { getVechiclesQuery } = useVehicles();

  if (getVechiclesQuery.isLoading) {
    return <div className="container mx-auto py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <RentCarForm />
      <Toaster />
      <DataTable columns={columns} data={getVechiclesQuery.data?.data ?? []} />
    </div>
  );
}
