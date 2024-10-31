<?php
require_once 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'] ?? '';
    $email = $_POST['email'] ?? '';
    $mensaje = $_POST['mensaje'] ?? '';

    // Validación básica
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        die("Por favor, complete todos los campos");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Email inválido");
    }

    try {
        $sql = "INSERT INTO contactos (nombre, email, mensaje) VALUES (:nombre, :email, :mensaje)";
        $stmt = $conn->prepare($sql);
        
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':mensaje', $mensaje);
        
        $stmt->execute();
        
        // Redireccionar o mostrar mensaje de éxito
        header("Location: gracias.html");
        exit();
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>