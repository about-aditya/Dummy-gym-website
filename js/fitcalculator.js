function calbmi(){
    var height = Number(document.getElementById("height").value);
    var heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;

    if (heightunits == "inches") height /= 39.3700787;
    if (weightunits == "lb") weight /= 2.20462;

    var BMI = Math.round(weight / Math.pow(height, 2) * 10000);
    document.getElementById("output").innerText = Math.round(BMI * 100) / 100;
    var output = Math.round(BMI * 100) / 100
        if (output < 18.5)
            document.getElementById("comment").innerText = "Underweight";
        else if (output >= 18.5 && output <= 25)
            document.getElementById("comment").innerText = "Normal";
        else if (output >= 25 && output <= 30)
            document.getElementById("comment").innerText = "Obese";
        else if (output > 30)
            document.getElementById("comment").innerText = "Overweight";
}
function calrfm(){
        var height=Number(document.getElementById("height").value);
        var waist=Number(document.getElementById("waist").value);
        if (document.getElementById("male").checked==true){
            var rfm=(64-(20*(height/waist)));
        }
        else{
            var rfm=(76-(20*(height/waist)));
        } 
        document.getElementById("output2").innerText = "Your RFM is :"+ rfm;
        //var output = rfm;
}
function calbai(){
    var h1=Number(document.getElementById('height2').value);
    var hi1=Number(document.getElementById('hip2').value);
    // var h2=Math.pow(h1,1.5);
    //var baio=((hi1/((h1)^1.5))-18);
    var h2=Math.pow(h1,1.5);
    var baio=((hi1/h2)-18);

    document.getElementById("output3").innerHTML="Your BAI is " + baio +"%";
    var output=baio;
}
function calwh(){
    var waist = Number(document.getElementById("waist").value);
    var hip = Number(document.getElementById("hip1").value);
    var w1=document.getElementById('waist').value;
    var h1=document.getElementById('hip1').value;
    var who=(w1/h1);

    document.getElementById("output4").innerHTML= who;
    var output=who;
}
