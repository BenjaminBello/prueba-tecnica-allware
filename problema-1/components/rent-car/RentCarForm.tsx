'use client';
import { useDialog } from '@/hooks/useDialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '../ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Separator } from '../ui/separator'
import { useGetBrands } from '@/hooks/useGetBrands';

export const RentCarForm = () => {
    const { setOpenDialog, isOpen } = useDialog();
    const { getBrandsQuery } = useGetBrands()

    const formSchema = z.object({
        clientName: z.string().min(1, { message: "Nombre es requerido" }),
        sellerRut: z.string().regex(/^\d{7,8}-[\dkK]$/, { message: "RUT inválido" }),
        numberPlate: z.string().regex(/^[A-Z]{2}\d{4}$|^[A-Z]{4}\d{2}$/i, { message: "Patente inválida" }),
        brand: z.string().min(1, { message: "Marca vehículo es requerido" }),
        model: z.string().min(1, { message: "Modelo vehículo es requerido" }),
        color: z.string().min(1, { message: "Color vehículo es requerido" }),
        price: z.number().min(1, { message: "Precio es requerido" }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            clientName: "",
            sellerRut: "",
            numberPlate: "",
            brand: "",
            model: "",
            color: "",
            price: 0,
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


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
                                        name="clientName"
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
                                                    <Input placeholder="0" {...field} />
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
                                                    <Input placeholder="Ej: ABCD12" {...field} />
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
                                                        <SelectItem value="toyota">Toyota</SelectItem>
                                                        {
                                                            getBrandsQuery.data?.map((brand) => (
                                                                <SelectItem key={brand.id} value={brand.id}>{brand.nombre}</SelectItem>
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
                                                        <SelectItem value="model1">Modelo1</SelectItem>
                                                        <SelectItem value="model2">Modelo2</SelectItem>
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
                            <Button type="button" variant="outline">
                                Cancelar
                            </Button>
                            <Button type="submit">Guardar</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>

    )
}