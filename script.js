var slider = document.getElementById("myRange");
var output = document.getElementById("degF");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

function decimal1(){
decimal = document.getElementsBy("myRange");
return decimal.toFixed(1);
}

function degCelConv() {

  var f = document.getElementById("myRange").value;
  
  var c = (f - 32) / 1.8;
  
  return c.toFixed(1);

}

document.getElementById("degC").innerHTML = degCelConv();

//----------------------------------------------------//

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("degC2");

output2.innerHTML = slider2.value;

slider2.oninput = function () {
  output2.innerHTML = this.value;
}

function degCconv() {

  var y = document.getElementById("myRange2").value;
  
  var x = (1.8 * y) + 32;
  
  return x.toFixed(1);

}

document.getElementById("degF2").innerHTML = degCconv();

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

//------//
function tonsConv() {

  var gpm = document.getElementById("myRange5").value;

  var delt = document.getElementById("myRange6").value;
  
  var tons  = gpm * delt * 500 / 12000;
  
  return tons.toFixed(1);

}

document.getElementById("tonnage1").innerHTML = tonsConv();

//----------------------------------------------------//

function refreshPage(){
  window.location.reload();
} 
