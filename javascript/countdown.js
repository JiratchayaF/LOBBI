function timercount(){
var count = 5;
var counter = setInterval(countdownTimeStart, 1000); //1000 will  run it every 1 second

function countdownTimeStart() {
    count = count - 1;
    if (count == -1) {
        clearInterval(counter);
        return;
    }
    if (count == 0) {
        clearInterval(counter);
        alert("Done for today, Time to UNPLUG!");
        }
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;

    document.getElementById("timespend").innerHTML = hours + "h " + minutes + "m " + seconds + "s"; 
    }
}