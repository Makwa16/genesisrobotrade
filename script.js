document.getElementById("licenseForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Simulate License Key Generation
    const licenseKey = 'KEY-' + Math.random().toString(36).substring(2, 15).toUpperCase();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const keyExpiry = document.getElementById("keyExpiry").value;
    
    let expiryDate;
    if (keyExpiry === "3days") {
        expiryDate = "3 Days";
    } else if (keyExpiry === "5months") {
        expiryDate = "5 Months";
    } else {
        expiryDate = "Lifetime";
    }

    // Append the new key to the key list table
    const keyList = document.getElementById("keyList");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${licenseKey}</td>
        <td>${expiryDate}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    keyList.appendChild(newRow);

    // Clear form inputs after submission
    document.getElementById("licenseForm").reset();

    // Add functionality to delete button
    const deleteBtn = newRow.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        newRow.remove();
    });
});
document.getElementById("licenseForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const licenseKey = 'KEY-' + Math.random().toString(36).substring(2, 15).toUpperCase();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const keyExpiry = document.getElementById("keyExpiry").value;
    const platform = document.getElementById("platform").value;
    const mentorId = document.getElementById("mentorId").value;

    const expiry = keyExpiry === "3days" ? "3 Days" : keyExpiry === "5months" ? "5 Months" : "Lifetime";

    const keyList = document.getElementById("keyList");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${licenseKey}</td>
        <td>${platform.toUpperCase()}</td>
        <td>${expiry}</td>
        <td>${mentorId}</td>
    `;

    keyList.appendChild(newRow);

    document.getElementById("licenseForm").reset();
});
<?php
// Sample license keys stored in the server
$licenseKeys = [
    "ABC123" => ["status" => "valid", "expiry" => "2024-12-31"],
    "XYZ456" => ["status" => "valid", "expiry" => "2025-06-30"],
    "INVALID" => ["status" => "invalid"]
];

// Get license key from query parameter
if (isset($_GET['license'])) {
    $licenseKey = $_GET['license'];

    // Check if license key exists
    if (array_key_exists($licenseKey, $licenseKeys)) {
        $licenseInfo = $licenseKeys[$licenseKey];
        echo json_encode($licenseInfo);
    } else {
        echo json_encode(["status" => "invalid"]);
    }
}
?>