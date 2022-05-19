function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('timer', deadline);

// SLIDER

let swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop: true,
  },
});
// SCROLL

function slowScroll(id) {
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top,
    },
    1000
  );
}

// VALIDATOR

let input = document.getElementById("name");
let tel = document.getElementById("tel");

function validate() {
  if (
    input.value == "" ||
    input.value.length < 2 ||
    !/^([а-яА-ЯёЁ]*)$/.test(input.value)
  ) {
    document.getElementById("err").innerHTML = "Некорректно введено Имя";
    return false;
  }

  if (tel.value.length < 16) {
    document.getElementById("err").innerHTML = "Некорректно введен номер";
    return false;
  }
}

var phoneMask = IMask(document.getElementById("tel"), {
  mask: "+{7}(000)000-00-00",
});
