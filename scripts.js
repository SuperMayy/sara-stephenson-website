var x = document.getElementById("theSidebar");
var y = document.getElementById("theDeleteButton");
var z = document.getElementById("theBar");

function displayNavbar() {
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
      z.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
    }
  }
  function removeNavbar() { 
    if (x.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
    }
    if (x.style.display === "none" && y.style.display === "block") {
        y.style.display = "none";
        z.style.display = "block"; 
    }
  }