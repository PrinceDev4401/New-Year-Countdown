window.onload = () => {

  const newYearEl = document.getElementById("new_year");
  const newYearTitle = document.getElementById("new_year_title");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secondsEl = document.getElementById("seconds");

  const newYear = new Date().getFullYear() + 1;
  const newYearTime = new Date(`January 01 ${newYear} 00:00:00`);

  newYearEl.innerHTML = newYear;

  function updateCountdown() {
    const currentTime = new Date();
    const totalSeconds = (newYearTime - currentTime) / 1000;

    const days = Math.floor(totalSeconds /3600 / 24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const mins = Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds) %60;

    if (currentTime.getMonth() == 0 && currentTime.getDate() <= 2) {
      daysEl.innerHTML = "00";
      hoursEl.innerHTML = "00";
      minsEl.innerHTML = "00";
      secondsEl.innerHTML = "00";
      newYearEl.innerHTML = newYear - 1;
      newYearTitle.innerHTML = "Happy New Year";
      return
    }

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}`: time;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  particlesJs("overlay", {
    particles: {
      number: { value: 400, density: {enable: true, value_area: 800}},
      color: {value: "#ffffff"},
      shape:{type: "circle", stroke: {width: 0, color: "#000000"},
    polygon: {nb_sides: 5},
  image: {src: "img/github.svg", width: 100, height: 100}},
  opacity: {
    value: 1,
    random: true,
    anim: {enable: true, speed: 1, opacity_min: 0, sync: false}
  },
  size: {
    value: 3,
    random: true, 
    anim: {enable: false, speed: 4, size_min: 0.3, sync: false}
  },
  line_linked: {
    enable: false,
    distance: 150,
    color: "#ffffff",
    opacity: 0.4,
    widtth:1
  },
  move: {
    enable: true,
    speed: 2,
    direction: "none",
    random: true,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: {enable: false, rotateX: 600, rotateY: 600}
  }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {enable: false, mode: "bubble"},
        onclick: {enable: true, mode: "repulse"},
        resize: true
      },
      modes:{
        grab:{distance: 400, line_linked:{opacity:1}},
        bubble:{distance: 250, size: 0, duration: 2, opacity: 0, speed: 3},
        repulse:{distance: 200, duration: 0.4},
        push: {particles_nb: 4},
        remove:{particles_nb: 2}
      }
    },
    retina_detect: true
  });
}