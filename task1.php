<!-- submit.php -->
<?php
// Connect to MySQL database 
$servername = "localhost";
$username = "kashish";
$password = "password";
$dbname = "code";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $codeLang = $_POST["code_language"];
    $stdin = $_POST["stdin"];
    
    // Handle file upload (source code)
    $sourceCode = file_get_contents($_FILES["sourcecode"]["tmp_name"]);
    
    // Insert data into database
    $sql = "INSERT INTO code_entries (username, code_language, stdin, source_code) VALUES ('$username', '$codeLang', '$stdin', '$sourceCode')";
    if ($conn->query($sql) === TRUE) {
        echo "Code snippet submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
