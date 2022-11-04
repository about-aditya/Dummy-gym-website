<style>
.one{
    background-color: #121212;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    font-size: xx-large;
    color: aliceblue;
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    border-bottom: #28e7e9 solid;
}
.two{
    text-align: center;
}
*{
    background-color: blanchedalmond;
    margin: 15px;
}
</style>

<?php
        $Name = $_REQUEST['name'];
        $Email= $_REQUEST['email'];
        $Subject = $_REQUEST['subject'];
        $Comments = $_REQUEST['comments'];

        $connection = mysqli_connect("localhost", "root", "",)
            or die("couldn't connect to server");


        $query = "CREATE DATABASE IF NOT EXISTS FORM";
        $result = mysqli_query($connection, $query)
            or die("Query failed: " . mysqli_error($connection));

        $db = mysqli_select_db($connection, "FORM")
            or die("couldn't select database");


        $query = "CREATE TABLE IF NOT EXISTS FEEDFORM ( `S No.` INT(100) NOT NULL ,  `Name` TEXT NOT NULL ,  `Email` VARCHAR(40) NOT NULL ,  `Subject` TEXT NOT NULL, `Comments` TEXT NOT NULL ,  `dt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ) ";
        $result = mysqli_query($connection, $query)
            or die("Query failed: " . mysqli_error($connection));

        $query = "INSERT INTO `FEEDFORM` (`name`, `email`, `subject`, `comments`, `dt`) 
        VALUES ('$Name', '$Email', '$Subject', '$Comments', current_timestamp());";


        if ($connection->query($query) === TRUE) {
            echo "<p class ='one'>Thank you for your valuable feedback. </p>
            <p class = 'two'><img src='../img/feedsubmit.jpg' width='500' height='500'></p>";
        } else {
            echo "Error: " . $query . "<br>" . $connection->error;
        }
              
        $connection->close();
?>