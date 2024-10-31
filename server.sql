-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS gaming_website;

-- Usar la base de datos
USE gaming_website;

-- Crear tabla de contactos
CREATE TABLE IF NOT EXISTS contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_contacto TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Opcionalmente, crear tabla de newsletter
CREATE TABLE IF NOT EXISTS newsletter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(150) NOT NULL UNIQUE,
    fecha_suscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);