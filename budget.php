<?php
include 'db.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = $_SESSION['user_id'];
    $budget_id = $_POST['budget_id'];
    $description = $_POST['description'];
    $amount = $_POST['amount'];
    $transaction_date = $_POST['transaction_date'];

    $stmt = $conn->prepare("INSERT INTO transactions (user_id, budget_id, description, amount, transaction_date) VALUES (:user_id, :budget_id, :description, :amount, :transaction_date)");
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':budget_id', $budget_id);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':amount', $amount);
    $stmt->bindParam(':transaction_date', $transaction_date);

    if ($stmt->execute()) {
        echo "Transaction added successfully!";
    } else {
        echo "Error: Could not add transaction.";
    }
}
?>
