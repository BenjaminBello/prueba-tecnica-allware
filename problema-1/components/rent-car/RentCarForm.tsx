'use client';
import { useEffect, useState } from 'react';
import { useDialog } from '@/hooks/useDialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useGetBrands } from '@/hooks/useGetBrands';
import { useGetModels } from '@/hooks/useGetModels';
import { useCreateVehicle } from '@/hooks';
import { Button, Dialog, DialogContent, DialogDescription, DialogTitle, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator } from '../ui';

export const RentCarForm = () => {
    const [brandId, setBrandId] = useState<number>();

    const { setOpenDialog, isOpen } = useDialog();
    const { getBrandsQuery } = useGetBrands()
    const { getModelsQuery } = useGetModels(brandId)
    const { createVehicleMutation } = useCreateVehicle()

    const formSchema = z.object({
        sellerName: z.string().min(1, { message: "Nombre es requerido" }),
        sellerRut: z.string().regex(/^\d{7,8}-[\dkK]$/, { message: "RUT inválido" }),
        numberPlate: z.string().regex(/^[A-Z]{2}\d{4}$|^[A-Z]{4}\d{2}$/i, { message: "Patente inválida" }),
        brand: z.string().min(1, { message: "Marca vehículo es requerido" }),
        model: z.string().min(1, { message: "Modelo vehículo es requerido" }),
        color: z.string().min(1, { message: "Color vehículo es requerido" }),
        price: z.string().min(1, { message: "Precio vehículo es requerido" }).refine((value) => {
            const parsedValue = parseFloat(value);
            return !isNaN(parsedValue) && parsedValue > 0;
        }, { message: "Precio inválido" }),

    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            sellerName: "",
            sellerRut: "",
            numberPlate: "",
            brand: "",
            model: "",
            color: "",
            price: "",
        },
    })


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { sellerName, color, model, numberPlate, price, sellerRut } = values
        await createVehicleMutation.mutateAsync({
            color,
            numberPlate,
            price: Number(price),
            sellerRut,
            modelId: Number(model),
            sellerName,
        });
        form.reset();
        setOpenDialog(false);
    }

    const brandValue = form.watch("brand")

    useEffect(() => {
        setBrandId(Number(brandValue))
    }, [brandValue]);

    return (
        <Dialog open={isOpen} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogTitle asChild>
                    <div>
                        <h2 className="text-2xl font-semibold">Registro de Vehículo</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Ingrese los datos del vendedor y vehículo</p>
                    </div>

                </DialogTitle>
                <DialogDescription className='hidden'>
                </DialogDescription>
                <Separator />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium">Detalles del Vendedor</h3>
                                <div className="grid gap-4">

                                    <FormField
                                        control={form.control}
                                        name="sellerName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nombre del Vendedor</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ingrese el nombre completo" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="sellerRut"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>RUT del Vendedor</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ej: 12345678-9" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <h3 className="text-lg font-medium">Detalles del Vehículo</h3>
                                <div className="grid gap-4 md:grid-cols-2">

                                    <FormField
                                        control={form.control}
                                        name="price"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Precio</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="0" {...field} type='number' onChange={(e) => {
                                                        const value = e.target.value
                                                        field.onChange(value === "" ? undefined : value)
                                                    }} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="numberPlate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Placa/Patente</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ej: ABCD12" {...field} onChange={
                                                        (e) => {
                                                            const value = e.target.value.toUpperCase();
                                                            field.onChange(value);
                                                        }
                                                    } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="brand"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Marca</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className='w-full'>
                                                            <SelectValue placeholder="Seleccione marca" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent >
                                                        {
                                                            getBrandsQuery.data?.map((brand) => (
                                                                <SelectItem key={brand.id} value={brand.id.toString()} onClick={() => setBrandId(brand.id)}>{brand.nombre}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="model"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Modelo</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className='w-full'>
                                                            <SelectValue placeholder="Seleccione modelo" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent >
                                                        {
                                                            getModelsQuery.data?.map((model) => (
                                                                <SelectItem key={model.id} value={model.id.toString()}>{model.nombre}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="color"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Color</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ej: Rojo" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />


                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 ">
                            <Button type="button" variant="outline" onClick={() => setOpenDialog(false)}>
                                Cancelar
                            </Button>
                            <Button type="submit"
                                disabled={createVehicleMutation.isPending}
                                className="bg-blue-500 hover:bg-blue-600 text-white"
                            >Guardar</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>

    )
}