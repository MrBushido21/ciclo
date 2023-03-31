AOS.init();
//================================================================================================================================================
//-----------------TEXT---------------\
const smoothScroll = (target, duration) => {
  const targetSection = document.querySelector(target);
  const targetPosition = targetSection.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  const animateScroll = currentTime => {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  
  requestAnimationFrame(animateScroll);
};

const navLinks = document.querySelectorAll('.header__link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetSection = e.target.getAttribute('href');
    const duration = 1000;
    smoothScroll(targetSection, duration);
  });
});
//================================================================================================================================================
//-----------------TEXT---------------\
// Получаем все секции на странице
const sections = document.querySelectorAll('section');

// Устанавливаем высоту секции равной высоте видимой области экрана
sections.forEach((section) => {
  section.style.height = window.innerHeight + 'px';
});

// Функция для прокрутки к следующей секции
function scrollToNextSection() {
  // Получаем текущую отображаемую секцию
  const currentSection = document.querySelector('section.active');
  // Если текущая секция последняя, то просто возвращаемся в начало
  if (!currentSection.nextElementSibling) {
    window.scrollTo({
      top: 0,
    });
    return;
  }
  
  
  // Прокручиваем до следующей секции
  currentSection.nextElementSibling.scrollIntoView({
    behavior: 'smooth'
  });
}

// Обработчик события скролла страницы
window.addEventListener('wheel', (event) => {
  event.preventDefault();
  // Если прокрутка вниз, то скроллим к следующей секции
  if (event.deltaY > 0) {
    scrollToNextSection();
  }
  // Если прокрутка вверх, то скроллим к предыдущей секции
  else {
    const currentSection = document.querySelector('section.active');
    if (currentSection.previousElementSibling) {
      currentSection.previousElementSibling.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
});

// Обработчик события загрузки страницы
window.addEventListener('load', () => {
  // Устанавливаем первую секцию как активную
  document.querySelector('section:first-child').classList.add('active');
});

// Обработчик события прокрутки страницы
window.addEventListener('scroll', () => {
  // Получаем отображаемую часть каждой секции
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    // Если больше половины секции видно на экране, то делаем ее активной
    if (sectionTop < window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
      document.querySelector('section.active').classList.remove('active');
      section.classList.add('active');
    }
  });
});

//================================================================================================================================================
//-----------------TEXT---------------\
//================================================================================================================================================
//-----------------TEXT---------------\
//================================================================================================================================================
//-----------------TEXT---------------\

let s75 = 0;
let s80 = 0;

function animateSimpleNumbers() {
  const s75Element = document.querySelector('.s75');
  const s80Element = document.querySelector('.s80');

  if (s75 < 75) {
    s75 += 1;
    s75Element.textContent = s75;
  }

  if (s80 < 80) {
    s80 += 1;
    s80Element.textContent = s80;
  }
}

let animationIntervalId;

function startSimpleAnimation() {
  animationIntervalId = setInterval(animateSimpleNumbers, 10);
}

function stopSimpleAnimation() {
  clearInterval(animationIntervalId);
}

const slide8 = document.querySelector('.slide8');

const slideObserver = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.attributeName === 'class' && slide8.classList.contains('active')) {
      startSimpleAnimation();
      slideObserver.disconnect();
    }
  }
});

slideObserver.observe(slide8, { attributes: true });

//================================================================================================================================================
//-----------------TEXT---------------\
//================================================================================================================================================
//-----------------TEXT---------------\
//================================================================================================================================================
//-----------------TEXT---------------\

let designNum = 0;
let projectsNum = 0;

function animatePercentageNumbers() {
  const designElement = document.querySelector('.slide3__design-numb');
  const projectsElement = document.querySelector('.slide3__projects-numb');

  if (designNum < 95) {
    designNum += 1;
    designElement.textContent = designNum + '%';
  }

  if (projectsNum < 60) {
    projectsNum += 1;
    projectsElement.textContent = projectsNum + '%';
  }
}

let intervalId;

function startPercentageAnimation() {
  intervalId = setInterval(animatePercentageNumbers, 10);
}

function stopPercentageAnimation() {
  clearInterval(intervalId);
}

const slide3 = document.querySelector('.slide3');

const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.attributeName === 'class' && slide3.classList.contains('active')) {
      startPercentageAnimation();
      observer.disconnect();
    }
  }
});

observer.observe(slide3, { attributes: true });

//================================================================================================================================================
//-----------------TEXT---------------\
//================================================================================================================================================
//-----------------TEXT---------------\
//================================================================================================================================================
//-----------------TEXT---------------\


let ss55 = 0;
let ss80 = 0;
let ss95 = 0;

function animateNumbers() {
  const ss55Element = document.querySelector('.ss55');
  const ss80Element = document.querySelector('.ss80');
  const ss95Element = document.querySelector('.ss95');

  if (ss55 < 55) {
    ss55 += 1;
    ss55Element.textContent = ss55;
  }

  if (ss80 < 80) {
    ss80 += 1;
    ss80Element.textContent = ss80;
  }

  if (ss95 < 95) {
    ss95 += 1;
    ss95Element.textContent = ss95;
  }
}

let animationIntervalIdd;

function startAnimation() {
  animationIntervalIdd = setInterval(animateNumbers, 10);
}

function stopAnimation() {
  clearInterval(animationIntervalIdd);
}

const slide12 = document.querySelector('.slide12');

const slideObserverr = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.attributeName === 'class' && slide12.classList.contains('active')) {
      startAnimation();
      slideObserverr.disconnect();
    }
  }
});

slideObserverr.observe(slide12, { attributes: true });

