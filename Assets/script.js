var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " Random fun picture appears";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute(
    "src",
    "https://oceanvodka.com/uploads/2019/04/HP-Hero-Header@2x.jpg"
  );
  mainEl.appendChild(imgEl);
}

setTime();
