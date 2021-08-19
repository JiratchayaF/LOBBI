const hourin = document.getElementById('hourin');
const minutein = document.getElementById('minutein');
const secondin = document.getElementById('secondin');

function showCurrentTime() {
    let date = new Date();
    let hr_in = date.getHours();
    let min_in = date.getMinutes();
    let sec_in = date.getSeconds();
    min_in = checkTime(min_in)
    sec_in = checkTime(sec_in)
    hourin.textContent = hr_in;
    minutein.textContent = min_in;
    secondin.textContent = sec_in;
}
setInterval(showCurrentTime, 1000);
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
function timeout() {
var currentdate = new Date(); 
var timenow = + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    document.getElementById("showout").innerHTML = timenow;
    out = timenow
    return out;
}
function timein() {
    var currentdate = new Date(); 
    var timenow = + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
        document.getElementById("showin").innerHTML = timenow;
    }


