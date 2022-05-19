function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let hoursSpan = clock.querySelector(".hours");
  let minutesSpan = clock.querySelector(".minutes");
  let secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    let t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = "2022-05-26";
initializeClock("timer", deadline);

// SLIDER

let swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop: true
  },
});
// SCROLL

function slowScroll(id) {
  $('html, body').animate({
      scrollTop: $(id).offset().top
  }, 3000);
}

// VALIDATOR

let submit = document.querySelector(".btn");
let input = document.getElementById("name");
let tel = document.getElementById("tel");


function validate() {
  if (input.value == "" || input.value.length < 2 || !(/^([а-яА-ЯёЁ]*)$/.test(input.value))) {
    document.getElementById("err").innerHTML = "Некорректно введено Имя";
    return false;
  }

  if (tel.value.length < 14) {
    document.getElementById("err").innerHTML = "Некорректно введен номер";
    return false;
  }
}


var phoneMask = IMask(
  document.getElementById('tel'), {
    mask: '+{7}(000)000-00-00'
  });