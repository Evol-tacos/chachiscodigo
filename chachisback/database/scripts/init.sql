SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
USE chachis_bakery_db;

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `estado` enum('activo','inactivo') DEFAULT 'activo',
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre completo` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `tipo` enum('admin','cliente') DEFAULT 'cliente',
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `estado` enum('activo','inactivo') DEFAULT 'activo',
  PRIMARY KEY (`id_producto`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `pedido` ( 
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `fecha_pedido` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_entrega` timestamp NOT NULL,
  `estado` enum('pendiente','en proceso','entregado','cancelado') NOT NULL DEFAULT 'pendiente',
  `total` decimal(10,2) NOT NULL,
  `comprobante_pago_url` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE sabores (
  `id_sabor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_sabor` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `estado` enum('activo','inactivo') DEFAULT 'activo',
  PRIMARY KEY (`id_sabor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE rellenos (
  `id_relleno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_relleno` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `estado` enum('activo','inactivo') DEFAULT 'activo',
PRIMARY KEY (`id_relleno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE tamanos (
`id_tamano` int(11) NOT NULL AUTO_INCREMENT,
`nombre_tamano` varchar(100) NOT NULL,
`descripcion` text DEFAULT NULL,
`estado` enum('activo','inactivo') DEFAULT 'activo',
PRIMARY KEY (`id_tamano`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `detallepedido` (
  `id_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_sabor` int(11) NOT NULL,
  `id_relleno` int(11) NOT NULL,
  `id_tamano` int(11) NOT NULL,
  `instrucciones` text DEFAULT NULL,
  `mensaje` varchar(20) DEFAULT NULL,
  `img_ref` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `id_pedido` (`id_pedido`),
  KEY `id_producto` (`id_producto`),
  KEY `id_sabor` (`id_sabor`),
  KEY `id_relleno` (`id_relleno`),
  KEY `id_tamano` (`id_tamano`),
  CONSTRAINT `detallepedido_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`),
  CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`),
  CONSTRAINT `detallepedido_ibfk_3` FOREIGN KEY (`id_sabor`) REFERENCES `sabores` (`id_sabor`),
  CONSTRAINT `detallepedido_ibfk_4` FOREIGN KEY (`id_relleno`) REFERENCES `rellenos` (`id_relleno`),
  CONSTRAINT `detallepedido_ibfk_5` FOREIGN KEY (`id_tamano`) REFERENCES `tamanos` (`id_tamano`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

COMMIT;