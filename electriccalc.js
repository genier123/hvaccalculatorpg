//------//
function ohmsCalc() {

    /*Ohms*/
    var E = document.getElementById("myVolts1").value;
  
    var I = document.getElementById("myAmps1").value;
 
    R = E / I;

    /*Amps*/
    document.getElementById("myResOut").innerHTML = R.toFixed(1);

}

function ampsCalc() {
    
    /*Amps*/
    var E = document.getElementById("myVolts2").value;

    var R = document.getElementById("myRes2").value;

    I = E / R;
    
    document.getElementById("myAmpsOut").innerHTML = I.toFixed(1);

}

function voltsCalc() {

    var I = document.getElementById("myAmps3").value;

    var R = document.getElementById("myRes3").value;

    E = I * R;

    document.getElementById("myVoltsOut").innerHTML = E.toFixed(1);

}