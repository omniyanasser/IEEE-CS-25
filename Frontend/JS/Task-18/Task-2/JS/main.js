//var countDownDate = new Date("May 25, 2025 09:00:00").getTime();
let dateInput = document.getElementById("datetime");
let startBtn = document.getElementById("startBtn");
let counter;

window.addEventListener("DOMContentLoaded", () => {
    let defaultDate = new Date("May 25, 2025 09:00:00");
    startCountdown(defaultDate);
  });

startBtn.addEventListener("click", () => {
    let countDownDate = new Date(dateInput.value);
  
    if (!dateInput.value || isNaN(countDownDate.getTime())) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid date',
        text: 'Please enter a valid date and time.',
      });
      return;
    }
  
    if (countDownDate.getTime()<= new Date().getTime()){
      Swal.fire({
        icon: 'warning',
        title: 'Past date',
        text: 'Please enter a future date and time.',
      });
      return;
    }
  
    startCountdown(countDownDate);
  });
  

  function startCountdown(countDownDate) {
    clearInterval(counter);

    document.querySelector(".parent").style.display = "flex";


 counter = setInterval(() => {
  var currentDate = new Date().getTime();
  var diffDate = countDownDate.getTime() -currentDate;

  var days = Math.floor(diffDate /(1000 * 60 * 60 * 24));
  var hours = Math.floor((diffDate %(1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
  var minutes = Math.floor((diffDate % (1000 * 60 * 60)) /(1000 * 60));
  var seconds = Math.floor((diffDate % (1000 * 60))/ 1000);

  if (diffDate > 0) {
    document.querySelector(".timeout").style.display = "none";
    document.querySelector(".days").innerHTML =days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML =hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML =minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML =seconds < 10 ? `0${seconds}` : seconds;
  } else {
    clearInterval(counter);
    
    document.querySelector(".timeout").style.display = "block";
    document.querySelector(".timeout").style.color = "red";
    document.querySelector(".parent").style.display = "none";
   
  }
}, 1000);

}

