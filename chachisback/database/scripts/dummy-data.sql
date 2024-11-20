SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

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


-- Datos para tabla sabores
INSERT INTO `sabores` (`nombre_sabor`, `descripcion`) VALUES 
('Chocolate', 'Sabor tradicional de chocolate'),
('Vainilla', 'Sabor clásico de vainilla'),
('Red Velvet', 'Sabor especial Red Velvet'),
('Café', 'Sabor intenso de café'),
('Limón', 'Sabor cítrico de limón'),
('Fresas', 'Sabor dulce de fresas');

-- Datos para tabla rellenos
INSERT INTO `rellenos` (`nombre_relleno`, `descripcion`) VALUES 
('Crema pastelera', 'Relleno cremoso tradicional'),
('Chocolate', 'Relleno de chocolate'),
('Frutas', 'Relleno de frutas mixtas'),
('Nuez', 'Relleno con nueces'),
('Cajeta', 'Relleno de cajeta'),
('Crema de mantequilla', 'Relleno suave de crema');

-- Datos para tabla tamanos
INSERT INTO `tamanos` (`nombre_tamano`, `descripcion`) VALUES 
('Individual', 'Porción individual'),
('Mediano', 'Tamaño para 4-6 personas'),
('Grande', 'Tamaño para 8-10 personas'),
('Mini', 'Porción pequeña'),
('Familiar', 'Tamaño para 12-15 personas'),
('Extra Grande', 'Tamaño para más de 15 personas');

-- Insertar datos en la tabla clientes
INSERT INTO `clientes` (`nombre completo`, `email`, `telefono`, `direccion`, `contrasena`,`tipo`, `fecha_creacion`) VALUES
('admin', 'admin@admin.com', '6623058940', 'admin', '$2a$10$j0QgK/l/9zy4sUflJBwz3OcxBaGF.dQU.1FtMWWyMYF3Lbb/PEQXi', 'admin', '2024-11-20 14:03:56'),
('bryant', 'prueba@prueba.com', '6622575633', 'tepic', 'prueba123', 'admin' , '2024-11-15 07:55:49'),
('sofia figueroa', 'sofi@prueba.com', '6623712484', 'unison', '$2a$10$vWPLwzJd0YWALUErtP7f0.wZtWNmlvgVBXLfQHGrSqo/9tlB9aeUm', 'cliente', '2024-11-15 09:58:36'),
('Tania Berenice Betancourt Laurean', 'tania@prueba.com', ' 6621904035', 'unison', '$2a$10$8x3Td//71zOykde/la8DY.6ty9LRCRhpqBfJR5d6OFPJZnTgJYNVe', 'cliente', '2024-11-15 11:23:54'),
('sachenka acevedo', 'sachenka@prueba.com', '6622037044', 'unison', '$2a$10$vc4gIRwnX76CbHYBSO1IlOMeg/Qu7igI3UEepKc9Z0HIsd0TO1F7i', 'cliente','2024-11-15 11:48:51');

-- Insertar pedidos de ejemplo
INSERT INTO `pedido` (`id_cliente`, `fecha_pedido`, `fecha_entrega`, `estado`, `total`, `comprobante_pago_url`) VALUES
(1, '2024-11-15 10:30:00', '2024-11-20 15:00:00', 'pendiente', 499.99, NULL),
(2, '2024-11-14 08:15:00', '2024-11-18 12:00:00', 'en proceso', 1200.50, 'https://example.com/comprobantes/1202.pdf'),
(3, '2024-11-10 14:50:00', '2024-11-16 18:00:00', 'entregado', 299.99, 'https://example.com/comprobantes/1203.pdf'),
(4, '2024-11-05 16:40:00', '2024-11-10 17:00:00', 'cancelado', 0.00, NULL);

-- Datos para tabla detallepedido con URLs de imagen de referencia
INSERT INTO `detallepedido` (`id_pedido`, `id_producto`, `id_sabor`, `id_relleno`, `id_tamano`, `instrucciones`, `mensaje`, `img_ref`) VALUES 
(1, 1, 1, 2, 2, 'Sin frutos secos', 'Feliz Cumpleaños', 'https://chachis.com/referencias/pedido1.jpg'),
(2, 2, 3, 1, 1, 'Decoración especial', 'Con amor', 'https://chachis.com/referencias/pedido2.jpg'),
(3, 3, 2, 3, 3, 'Sin azúcar', 'Gracias', 'https://chachis.com/referencias/pedido3.jpg'),
(4, 1, 5, 4, 4, 'Extra crujientes', 'Buen provecho', 'https://chachis.com/referencias/pedido4.jpg');

COMMIT;