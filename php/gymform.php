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
    background-color: #28e7e9;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    font-size: xx-large;
    color: #121212;
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    border-bottom: #121212 solid;
}
.three{
    text-align: center;
}
*{
    background-color: blanchedalmond;
    margin: 15px;
}
</style>

<?php
        $Name = $_REQUEST['name'];
        $Gender = $_REQUEST['gender'];
        $Age = $_REQUEST['age'];
        $Email= $_REQUEST['email'];
        $Phone = $_REQUEST['phone'];
        $Address = $_REQUEST['address'];

        $connection = mysqli_connect("localhost", "root", "",)
            or die("couldn't connect to server");


        $query = "CREATE DATABASE IF NOT EXISTS FORM";
        $result = mysqli_query($connection, $query)
            or die("Query failed: " . mysqli_error($connection));

        $db = mysqli_select_db($connection, "FORM")
            or die("couldn't select database");


        $query = "CREATE TABLE IF NOT EXISTS GYMFORM ( `S No.` INT(100) NOT NULL ,  `Name` TEXT NOT NULL ,  `Age` INT(3) NOT NULL ,  `Gender` VARCHAR(8) NOT NULL ,  `Email` VARCHAR(40) NOT NULL ,  `Phone` VARCHAR(10) NOT NULL ,  `Address` TEXT NOT NULL ,  `dt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ) ";
        $result = mysqli_query($connection, $query)
            or die("Query failed: " . mysqli_error($connection));

        $query = "INSERT INTO `gymform` (`name`, `age`, `gender`, `email`, `phone`, `address`, `dt`) 
        VALUES ('$Name', '$Age', '$Gender', '$Email', '$Phone', '$Address', current_timestamp());";


        if ($connection->query($query) === TRUE) {
            echo "<p class ='one'>Thank you for getting in touch! </p>
            <p class = 'two'>We appreciate you contacting our gym, BodyFlex. One of our colleagues will get back in touch with you soon! Have a great day, We will be happy to see you in our gym.</p>
            <p class = 'three'><img src='../img/gymformsubmit.jpg' width='500' height='500'></p>";
        } else {
            echo "Error: " . $query . "<br>" . $connection->error;
        }
              
        $connection->close();
?>