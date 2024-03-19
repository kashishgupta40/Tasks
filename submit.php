<!-- submit.php -->
<?php
// Connect to MySQL database (replace with your database credentials)
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "dbname";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $codeLang = $_POST["codelang"];
    $stdin = $_POST["stdin"];
    
    // Handle file upload (source code)
    $sourceCode = file_get_contents($_FILES["sourcecode"]["tmp_name"]);
    
    // Insert data into database
    $sql = "INSERT INTO codesnippets (username, code_language, stdin, source_code) VALUES ('$username', '$codeLang', '$stdin', '$sourceCode')";
    if ($conn->query($sql) === TRUE) {
        echo "Code snippet submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
