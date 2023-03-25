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


    const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");
    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
    const showHideIcons = () => {
    
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }
    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidth = firstImg.clientWidth + 14; 
            carousel.scrollLeft += icon.id == "esquerda" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60); 
        });
    });
    const autoSlide = () => {
        
        if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
        positionDiff = Math.abs(positionDiff); 
        let firstImgWidth = firstImg.clientWidth + 14;
        
        let valDifference = firstImgWidth - positionDiff;
        if(carousel.scrollLeft > prevScrollLeft) { 
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    const dragStart = (e) => {
        
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }
    const dragging = (e) => {
        
        if(!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }
    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");
        if(!isDragging) return;
        isDragging = false;
        autoSlide();
    }
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);





    const carouselP = document.querySelector(".carouselP"),
    firstImgP = carouselP.querySelectorAll("img")[0],
    arrowIconsP = document.querySelectorAll(".wrapperP i");
    let isDragStartP = false, isDraggingP = false, prevPageXP, prevScrollLeftP, positionDiffP;
    const showHideIconsP = () => {
    
        let scrollWidthP = carouselP.scrollWidth - carouselP.clientWidth; 
        arrowIconsP[0].style.display = carouselP.scrollLeft == 0 ? "none" : "block";
        arrowIconsP[1].style.display = carouselP.scrollLeft == scrollWidth ? "none" : "block";
    }
    arrowIconsP.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidthP = firstImgP.clientWidth + 14; 
            carouselP.scrollLeft += icon.id == "esquerdaP" ? -firstImgWidthP : firstImgWidthP;
            setTimeout(() => showHideIconsP(), 60); 
        });
    });
    const autoSlideP = () => {
        
        if(carouselP.scrollLeft - (carouselP.scrollWidth - carouselP.clientWidth) > -1 || carouselP.scrollLeft <= 0) return;
        positionDiffP = Math.abs(positionDiffP); 
        let firstImgWidthP = firstImgP.clientWidth + 14;
        
        let valDifferenceP = firstImgWidthP - positionDiffP;
        if(carouselP.scrollLeft > prevScrollLeftP) { 
            return carouselP.scrollLeft += positionDiffP > firstImgWidthP / 3 ? valDifferenceP : -positionDiffP;
        }
        
        carouselP.scrollLeft -= positionDiffP > firstImgWidthP / 3 ? valDifferenceP : -positionDiffP;
    }
    const dragStartP = (e) => {
        
        isDragStartP = true;
        prevPageXP = e.pageX || e.touches[0].pageX;
        prevScrollLeftP = carouselP.scrollLeft;
    }
    const draggingP = (e) => {
        
        if(!isDragStartP) return;
        e.preventDefault();
        isDraggingP = true;
        carouselP.classList.add("draggingP");
        positionDiffP = (e.pageX || e.touches[0].pageX) - prevPageXP;
        carouselP.scrollLeft = prevScrollLeftP - positionDiffP;
        showHideIconsP();
    }
    const dragStopP = () => {
        isDragStartP = false;
        carouselP.classList.remove("draggingP");
        if(!isDraggingP) return;
        isDraggingP = false;
        autoSlideP();
    }
    carouselP.addEventListener("mousedown", dragStartP);
    carouselP.addEventListener("touchstart", dragStartP);
    document.addEventListener("mousemove", draggingP);
    carouselP.addEventListener("touchmove", draggingP);
    document.addEventListener("mouseup", dragStopP);
    carouselP.addEventListener("touchend", dragStopP);

















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