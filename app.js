function timeplay(){
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime ="Date:"+ date+" | "+time;

document.getElementById("clockview").innerText = dateTime;
}
setInterval(timeplay,1000)

