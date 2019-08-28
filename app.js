function MyTime(){
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime ='Date:'+ date+' | '+time;

document.getElementById("clockview").innerText = dateTime;
}
setInterval(MyTime,1000);

var modal = document.getElementById("myModal");
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {

  modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
  }
btn2.onclick = function() {
    modal.style.display = "block";
  }
 btn3.onclick = function() {
    modal.style.display = "block";
  }
  btn4.onclick = function() {
    modal.style.display = "block";
  }
  btn5.onclick = function() {
    modal5.style.display = "block";
  }
  function close(){
    var modal5 = document.getElementById("myModal5");
    modal5.style.display = "none";
    console.log("not bed");
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}