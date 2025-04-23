
import { columns } from '@/components/rent-car/columns';
import { DataTable } from '@/components/rent-car/data-table';
import { RentCarForm } from '@/components/rent-car/RentCarForm';
import { rentedCars } from '@/data/cars.data';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <RentCarForm />
      <DataTable columns={columns} data={rentedCars} />
    </div>
  );
}
