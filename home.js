const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        } else {
            entry.target.classList.remove('mostrar');
        }

    });
});

const hiddenElements = document.querySelectorAll('.escondido');
hiddenElements.forEach((el) => observer.observe(el));


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $("header").addClass("fundo2");
            $(".nav-menu").addClass("nav-menu-2");
        } else {
            $("header").removeClass("fundo2");
            $(".nav-menu").removeClass("nav-menu-2");
        }
    });
});

let progressBar = document.querySelector(".circulo");
let valueContainer = document.querySelector(".porcentagem");

let progressValue = 0;
let progressEndValue = 90;
let speed = 300;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
        #F7B993 ${progressValue * 3.6}deg,
        #946643 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

let progressBar1 = document.querySelector(".circulo1");
let valueContainer1 = document.querySelector(".porcentagem1");

let progressValue1 = 0;
let progressEndValue1 = 95;
let speed1 = 300;

let progress1 = setInterval(() => {
  progressValue1++;
  valueContainer1.textContent = `${progressValue1}%`;
  progressBar1.style.background = `conic-gradient(
        #F7B993 ${progressValue1 * 3.6}deg,
        #946643 ${progressValue1 * 3.6}deg
  )`;
  if (progressValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);

let progressBar2 = document.querySelector(".circulo2");
let valueContainer2 = document.querySelector(".porcentagem2");

let progressValue2 = 0;
let progressEndValue2 = 50;
let speed2 = 300;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
        #F7B993 ${progressValue1 * 3.6}deg,
        #946643 ${progressValue1 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

const observer2 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('mostrar2');
      } else {
          entry.target.classList.remove('mostrar2');
      }

  });
});

const hiddenElements2 = document.querySelectorAll('.escondido2');
hiddenElements2.forEach((el) => observer2.observe(el));



const observer3 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar3');
        } else {
            entry.target.classList.remove('mostrar3');
        }
  
    });
  });
  
  const hiddenElements3 = document.querySelectorAll('.escondido3');
  hiddenElements3.forEach((el) => observer3.observe(el));
  


  const observer4 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar4');
        } else {
            entry.target.classList.remove('mostrar4');
        }
  
    });
  });
  
  const hiddenElements4 = document.querySelectorAll('.escondido4');
  hiddenElements4.forEach((el) => observer4.observe(el));






























const observer1 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar1');
        } else {
            entry.target.classList.remove('mostrar1');
        }

    });
});

const hiddenElements1 = document.querySelectorAll('.escondido1');
hiddenElements1.forEach((el) => observer1.observe(el));