CREATE TABLE vendedor
(
    id     SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    rut    VARCHAR(20)  NOT NULL UNIQUE
);

CREATE TABLE marca
(
    id     SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE modelo
(
    id       SERIAL PRIMARY KEY,
    nombre   VARCHAR(50) NOT NULL,
    marca_id INT         NOT NULL,
    FOREIGN KEY (marca_id) REFERENCES marca (id)
);

CREATE TABLE vehiculo
(
    id             SERIAL PRIMARY KEY,
    patente        VARCHAR(10) UNIQUE NOT NULL,
    precio         INT                NOT NULL,
    fecha_creacion DATE DEFAULT CURRENT_DATE,
    color          VARCHAR(20),
    modelo_id      INT                NOT NULL,
    vendedor_id    INT                NOT NULL,
    FOREIGN KEY (modelo_id) REFERENCES modelo (id),
    FOREIGN KEY (vendedor_id) REFERENCES vendedor (id)
);

INSERT INTO vendedor (nombre, rut)
VALUES ('Juan Pérez', '12345678-9'),
       ('Ana López', '98765432-1'),
       ('Carlos González', '11223344-5');

INSERT INTO marca (nombre)
VALUES ('Toyota'),
       ('Ford'),
       ('Chevrolet');

INSERT INTO modelo (nombre, marca_id)
VALUES ('Yaris', 1),
       ('Corolla', 1),
       ('Fiesta', 2),
       ('Focus', 2),
       ('Spark', 3),
       ('Aveo', 3);

INSERT INTO vehiculo (patente, modelo_id, precio, color, vendedor_id)
VALUES 
('ABC123', 1, 85000, 'Rojo', 1),
('DEF456', 1, 90000, 'Azul', 1),
('GHI789', 1, 78000, 'Negro', 2),
('JKL012', 2, 80000, 'Blanco', 2),
('MNO345', 2, 95000, 'Gris', 2),
('PQR678', 2, 97000, 'Plata', 3),
('STU901', 2, 99000, 'Rojo', 3),
('VWX234', 3, 82000, 'Verde', 1),
('YZA567', 3, 87000, 'Celeste', 1),
('BCD890', 3, 88000, 'Amarillo', 2),
('EFG123', 3, 91000, 'Azul', 2),
('HIJ456', 4, 93000, 'Negro', 3),
('KLM789', 4, 94000, 'Blanco', 3),
('NOP012', 4, 76000, 'Gris', 1),
('QRS345', 4, 82000, 'Rojo', 1),
('TUV678', 5, 81000, 'Verde', 2),
('WXY901', 5, 87000, 'Negro', 2),
('ZAB234', 5, 89000, 'Plata', 3),
('CDE567', 5, 86000, 'Gris', 3),
('FGH890', 6, 84000, 'Rojo', 1);
