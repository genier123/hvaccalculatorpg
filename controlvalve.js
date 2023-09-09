//------//
function tonsConv() {

    var gpm = document.getElementById("myGpm1").value;
  
    var delt = document.getElementById("myDeltaT1").value;
    
    var tons  = gpm * delt * 500 / 12000;
    
    document.getElementById("myTons1").innerHTML = tons.toFixed(1);
  
  }