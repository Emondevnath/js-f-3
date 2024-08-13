// light on of function
function showOff() {
  document.getElementById("lightImg").src = "images/ofbulb.gif";
}
function showOn() {
  document.getElementById("lightImg").src = "images/onbulb.gif";
}
// light on of function

// light on of onmouseenter
function seenOff() {
  document.getElementById("seenImg").src = "images/ofbulb.gif";
}
function seenOn() {
  document.getElementById("seenImg").src = "images/onbulb.gif";
}
// light on of onmouseenter

// light on of onmouseleave
function leaveOff() {
  document.getElementById("leaveImg").src = "images/ofbulb.gif";
}
function leaveOn() {
  document.getElementById("leaveImg").src = "images/onbulb.gif";
}
// light on of onmouseleave
// light on of onmouseleave
function overOff() {
  document.getElementById("overImg").src = "images/ofbulb.gif";
}
function overOn() {
  document.getElementById("overImg").src = "images/onbulb.gif";
}
// light on of onmouseleave

// feeling sad smile
function sadOff() {
  document.getElementById("felImg").src = "images/sad.png";
}
function smileOn() {
  document.getElementById("felImg").src = "images/smile.png";
}
// feeling sad smile

// diamond ruby
function felOff() {
  document.getElementById("drImg").src = "images/ruby.png";
}
function felOn() {
  document.getElementById("drImg").src = "images/diamond.png";
}
// diamond ruby

// increase font
function showFont() {
  document.getElementById("fSize").style.fontSize = "40px";
}
// increase font

// chance color
function showColor() {
  document.getElementById("fColor").style.color = "red";
}
// chance color

// show date
function showDate() {
  document.getElementById("Sdate").innerHTML = Date();
  document.getElementById("Sdate").style.color = "blue";
}
// show date

// content show hide
function showCon() {
  document.getElementById("dtext").style.display = "block";
}
function hideCon() {
  document.getElementById("dtext").style.display = "none";
}
// content show hide


// result 
var num1 = 5;
var num2 = 10;

var result = num1 + num2;

function ShowResult(){
    document.getElementById('result').innerHTML = result;
}
// result 

// demo text
document.getElementById("demotext").innerHTML = "I am learning javascript";
document.getElementById("demotext").style.fontSize = "50px";
document.getElementById("demotext").style.textTransform = "uppercase";
document.getElementById("demotext").style.color = "red";
// demo text

// text chance
function showChance(){
    document.getElementById("tchance").innerHTML = "Hello World";
}
// text chance


// state ment

let a, b, c;
a = 5;
b = 9;
c = a + b;

document.getElementById("demo1").innerHTML = c;


// start ment

function myFunction() {
    document.getElementById("demo3").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }
