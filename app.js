function MyTime(){
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime ='Date:'+ date+' | '+time;

document.getElementById("clockview").innerText = dateTime;
}
setInterval(MyTime,1000);

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close");
function onclicking(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
 
  // var span = document.getElementsByClassName("close")[0];
//   span.onclick = function(){
//     modal.style.display = "none";
//     break;
//  }
}
  

//  var span = document.getElementsByClassName("close")[0];
  span.onclick = function(){
     modal.style.display = "none";
     console.log("why??")
 }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}