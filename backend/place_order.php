<?php
include 'db.php';
$data = json_decode(file_get_contents("php://input"));
$total = $data->total;
$conn->query("INSERT INTO orders (total_amount) VALUES ($total)");
echo json_encode(['status' => 'order placed']);
?>