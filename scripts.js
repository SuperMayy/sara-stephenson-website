//nav bar
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

// the changeing text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["sarah stephenson", "a copywriter", "a scriptwriter"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing"))cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if(charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex >=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length)setTimeout(type, newTextDelay + 250);
});