SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Insertar datos en la tabla clientes
INSERT INTO `clientes` (`nombre completo`, `email`, `telefono`, `direccion`, `contrasena`,`tipo`, `fecha_creacion`) VALUES
('bryant', 'prueba@prueba.com', '6622575633', 'tepic', 'prueba123', 'admin' , '2024-11-15 07:55:49'),
('sofia figueroa', 'sofi@prueba.com', '6623712484', 'unison', '$2a$10$vWPLwzJd0YWALUErtP7f0.wZtWNmlvgVBXLfQHGrSqo/9tlB9aeUm', 'cliente', '2024-11-15 09:58:36'),
('Tania Berenice Betancourt Laurean', 'tania@prueba.com', ' 6621904035', 'unison', '$2a$10$8x3Td//71zOykde/la8DY.6ty9LRCRhpqBfJR5d6OFPJZnTgJYNVe', 'cliente', '2024-11-15 11:23:54'),
('sachenka acevedo', 'sachenka@prueba.com', '6622037044', 'unison', '$2a$10$vc4gIRwnX76CbHYBSO1IlOMeg/Qu7igI3UEepKc9Z0HIsd0TO1F7i', 'cliente','2024-11-15 11:48:51');

-- Insertar categorías 
INSERT INTO `categoria` (`nombre_categoria`, `descripcion`) VALUES
('Cumpleaños', 'Pasteles para todo tipo de cumpleaños'),
('Infantil', 'Pasteles con tematica infantil'),
('Boda', 'Pasteles con tematica de boda'),
('Personalizado', 'Pasteles personalizados');

-- Insertar productos de ejemplo
INSERT INTO `producto` (`nombre_producto`, `descripcion`, `id_categoria`, `precio`, `cantidad`, `estado`) VALUES
('Pastel de Chocolate', 'Delicioso pastel de chocolate con ganache', 1, 350.00, 1, 1),
('Pastel de Fresa', 'Pastel de fresa con crema y frutas', 1, 300.00, 1, 1),
('Pastel de Vainilla', 'Pastel de vainilla con crema y frutas', 1, 300.00, 1, 1);

-- Insertar ingredientes de ejemplo
INSERT INTO `inventario` (`nombre_ingrediente`, `cantidad`, `cantidad_min`, `unidad`) VALUES
('Harina', 25.00, 5.00, 'kg'),
('Azúcar', 20.00, 4.00, 'kg'),
('Mantequilla', 15.00, 3.00, 'kg'),
('Huevos', 120.00, 24.00, 'pz'),
('Leche', 30.00, 6.00, 'lt');

COMMIT;