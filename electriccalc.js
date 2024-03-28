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

// Function to open tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    
    // Fetch content from external HTML file and display it
    fetchContent(tabName);
  }
  
  // Function to fetch content from external HTML file
  function fetchContent(tabName) {
    fetch(tabName.toLowerCase() + ".html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(tabName).innerHTML = data;
      })
      .catch(error => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }
  