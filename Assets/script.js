var timeEl = document.querySelector(".time");

var mainEl = documnet.getElementById("main");

var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsleft--;
    timeEl.textContent = secondsLeft + "Random fun pictue appears";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "";
  var imgEl = document.createElement("img");
  imgEl.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPiYB8dCdTJN7DTmcliXhmof21Wdy0RIqng&usqp=CAU"
  );
  mainEl.appendChild(imgEl);
}

setTime();
