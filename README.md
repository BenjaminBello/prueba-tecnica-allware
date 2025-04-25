# Prueba técnica Allware

## Pasos generales:
1. Clonar el repositorio o descargar el zip.
2. Tener docker instalado y corriendo.
3. Ejecutar el siguiente comando en la raíz del proyecto para levantar la BD (`PostgreSQL`) y rellenarla con datos de prueba:
```
docker-compose up -d
```
4. Recomendado tener algún IDE como `Intellij` para el backend de Java. De lo contrario, tener instalado `Maven` y `Java 1.8` para poder correr el backend de Java.
5. Tener instalado `Node.js` y `npm` para correr el frontend de React.


## Problema 1 - Nextjs (React) y Prisma:
1. Hacer cd a la carpeta **problema-1**.
2. Instalar las dependencias:
```
npm install
```
3. Generar el cliente de prisma:
```
npx prisma generate
```
4. Echar a correr la app:
```
npm run dev
```
### Resumen
- La app creada muestra una vista simple con una tabla cue muestra los vehículos.
- La tabla tiene paginación, ordenamiento por columnas, filtro por búsqueda y eliminación de registro.
- Se permite la creación de un nuevo registro a través de un formulario que utiliza `React Hook Form` y validación con `Zod`.
- Como extra, para manejo de peticiones asíncronas, caché y mutaciones, se utilizó `Tanstack Query`.
- Se utilizó `Tailwind CSS` para el diseño de la app.
- Se utilizó `Zustand` para el manejo de estado global.
- Para la reutilización de componentes, se utilizó `Shadcn UI`.
- Explicación de carpetas:
  - **components**: Componentes reutilizables.
  - **hooks**: Hooks personalizados utilizados a lo largo de la app.
  - **lib**: Funciones y utilidades.
  - **prisma**: Archivo donde se encuentra la configuración de los modelos de datos.
  - **interfaces**: Tipado de datos utilizado a lo largo de la app.
  - **mappers**: Funciones que se encargan de transformar los datos de la BD a un formato definido en las interfaces.
  - **actions**: Funciones que se encargan de realizar las peticiones a la BD y regresar la respuesta.
  - **Providers**: Proveedores de contexto utilizados a lo largo de la app (TanStack Query).

## Problema 2 - React (Vite) y Java 1.8:
1. Hacer cd a la carpeta **problema-2**.
2. Hacer cd a la carpeta **backend**.
3. Asegurarse que el contenedor de la base de datos PostreSQL esté corriendo.
4. Abrir el proyecto en un IDE como Intellij.
5. Reconstruir el proyecto para que descargue las dependencias de Maven. Esto se puede hacer desde la opción de Maven en el IDE o ejecutando el siguiente comando en la terminal:
```
mvn clean install
```
6. Ejecutar (si se usa Intellij) el archivo `Main.java`.
7. Hacer cd a la carpeta **frontend**.
8. Instalar las dependencias con `npm install`
9. Correr la app:
```
npm run dev
```


### Resumen
- La clase VehiculoDAO.java se encarga de realizar la conexión a la BD de postgres y traer el listado de vehículos.
- La clase VehiculoService.java se encarga de llamar al DAO.
- La clase Vehiculo.java es el modelo de datos que representa un vehículo.
- La clase Main.java contiene el url donde corre el webservice.
- La interfaz del frontend es muy similar a la del problema 1, al igual que las carpetas.
- Utilización de: `Tailwind CSS`, `Tanstack Query`, `Shadcn UI`, `Axios`. 
