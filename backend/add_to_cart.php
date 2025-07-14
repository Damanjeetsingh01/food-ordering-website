<?php
include 'db.php';
$data = json_decode(file_get_contents("php://input"));
$item = $data->item;
$qty = $data->qty;
$conn->query("INSERT INTO cart (item, qty) VALUES ('$item', $qty)");
echo json_encode(['status' => 'added']);
?>