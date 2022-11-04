function myFunction1() {
    let x = document.getElementById("beats").value;
    let text;
    if (x == "") {
      text = "-PLEASE PROVIDE INPUT-";
    } else if (x * 4 <= 100 && x * 4 >= 60) {
      text = "Great, You have a normal heart rate.";
    } else if (x * 4 < 60) {
      text =
        "No need to worry, Some change in your lifestyle can increase your heart rate back to normal.";
    } else if (x * 4 > 100) {
      text =
        "Don't Worry Some change in your lifestyle can decrease your heart rate back to normal.";
    } else {
      text = "Enter Valid Input!!";
    }
    document.getElementById("demo1").innerHTML = text;
  }
  function myFunction2() {
    let x = document.getElementById("pushup").value;
    let text;
    if (document.getElementById("male2").checked == true) {
      if (x == "") {
        text = "-PLEASE PROVIDE INPUT-";
      } else if (x <= 20) {
        text = "BEGINNER, WELCOME NEWBIE!!";
      } else if (x > 20 && x <= 30) {
        text = "INTERMEDIATE, GOOD GOING!!";
      } else if (x > 30) {
        text = "IMPRESSIVE, YOU ARE ADVANCED";
      } else {
        text = "Enter Valid Input!!";
      }
    } else if (document.getElementById("female2").checked == true) {
      if (x == "") {
        text = "-PLEASE PROVIDE INPUT-";
      } else if (x <= 10) {
        text = "BEGINNER, WELCOME NEWBIE";
      } else if (x > 10 && x <= 20) {
        text = "INTERMEDIATE, GOOD GOING!!";
      } else if (x > 20) {
        text = "IMPRESSIVE, YOU ARE ADVANCED";
      } else {
        text = "Enter Valid Input!!";
      }
    }
    document.getElementById("demo2").innerHTML = text;
  }
  function myFunction3() {
    let x = document.getElementById("situp").value;
    let text;
    if (document.getElementById("male3").checked == true) {
      if (x == "") {
        text = "-PLEASE PROVIDE INPUT-";
      } else if (x <= 35) {
        text = "BEGINNER, WELCOME NEWBIE";
      } else if (x > 35 && x <= 45) {
        text = "INTERMEDIATE, GOOD GOING!!";
      } else if (x > 45) {
        text = "IMPRESSIVE, YOU ARE ADVANCED";
      } else {
        text = "Enter Valid Input!!";
      }
    } else if (document.getElementById("female3").checked == true) {
      if (x == "") {
        text = "-PLEASE PROVIDE INPUT-";
      } else if (x <= 20) {
        text = "BEGINNER, WELCOME NEWBIE";
      } else if (x >= 20 && x <= 35) {
        text = "INTERMEDIATE, GOOD GOING!!";
      } else if (x > 35) {
        text = "IMPRESSIVE, YOU ARE ADVANCED";
      } else {
        text = "Enter Valid Input!!";
      }
    }
    document.getElementById("demo3").innerHTML = text;
  }
  function myFunction4() {
    if (document.getElementById("1").checked == true) {
      text = "BEGINNER, WELCOME NEWBIE";
    } else if (document.getElementById("2").checked == true) {
      text = "INTERMEDIATE, GOOD GOING!!";
    } else if (document.getElementById("3").checked == true) {
      text = "IMPRESSIVE, YOU ARE ADVANCED";
    } else {
      text = "-PLEASE CHOOSE YOUR POSITION-";
    }
    document.getElementById("demo4").innerHTML = text;
  }