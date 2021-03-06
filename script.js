//----------------------------------------------------//

//function temperatureConverter(valNum) {
//  valNum = parseFloat(valNum);
//  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;

//}

function TempConverter() {

  var f = document.getElementById("inputFahrenheit").value;
  
  var c = (f - 32) / 1.8;
  
  document.getElementById("outputCelsius").innerHTML = c.toFixed(1);

  var f = document.getElementById("inputFahrenheit").value;
  
  var k = ((f-32)/1.8)+273.15;
  
  document.getElementById("outputKelvin").innerHTML = k.toFixed(1);
  
}

//----------------------CFM Convertor------------------------------//
function CfmConverter() {

  var vel = document.getElementById("velocity2").value;

  var area = document.getElementById("area2").value;
  
  var cfm  = vel * area;
  
  document.getElementById("cfm1").innerHTML = cfm.toFixed(1);

}

//----------------------------------------------------//

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("fpm1");

output3.innerHTML = slider3.value;

slider3.oninput = function () {
  output3.innerHTML = this.value;
}

var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("area1");

output4.innerHTML = slider4.value;

slider4.oninput = function () {
  output4.innerHTML = this.value;
}

function cfmConv() {

  var vel = document.getElementById("myRange3").value;

  var area = document.getElementById("myRange4").value;
  
  var cfm  = vel * area;
  
  return cfm.toFixed(1);

}

document.getElementById("cfm1").innerHTML = cfmConv();

//-------------------- Tons -----------------------------//
//------//
var slider5 = document.getElementById("myRange5");
var output5 = document.getElementById("gpm1");

output5.innerHTML = slider5.value;

slider5.oninput = function () {
  
  output5.innerHTML = this.value;

}

//------//
var slider6 = document.getElementById("myRange6");
var output6 = document.getElementById("delta1");

output6.innerHTML = slider6.value;

slider6.oninput = function () {
  
  output6.innerHTML = this.value;

}

//----------------------------------------------------//

function refreshPage(){
  window.location.reload();
} 
