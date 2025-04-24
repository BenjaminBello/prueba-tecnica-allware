import { getVehiclesAction } from '@/actions/get-vehicles.action';
import { columns } from '@/components/rent-car/columns';
import { DataTable } from '@/components/rent-car/data-table';
import { RentCarForm } from '@/components/rent-car/RentCarForm';
import { Toaster } from 'sonner';

export default async function Home() {


  const { data } = await getVehiclesAction();


  return (
    <div className="container mx-auto py-10">
      <RentCarForm />
      <Toaster />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
