const btnLightMode = document.querySelector('.light-mode-btn');

btnLightMode.onclick = function () {
    btnLightMode.classList.toggle('light-mode-btn--active');
    document.body.classList.toggle('light');
}


// Создаем функцию появление и исчезновения кнопки
window.addEventListener('scroll', function() {
  if(window.pageYOffset > 500) {
    goTopBtn.classList.add('btn-top-active')
  } else {
    goTopBtn.classList.remove('btn-top-active');
  }
});
let goTopBtn = document.querySelector('.btn-top');
// Создаем функцию кнопки
goTopBtn.addEventListener('click', function backToTop() {
  if(window.pageYOffset > 0) {
    window.scrollBy(0, -50);
    setTimeout(backToTop, 2)
  }
});



// Настройка первого прогрессбара
const circle = document.querySelector('.progress-ring__circle');
if(circle) {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;
  function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
  }
  
  // Настройка второго прогрессбара
  const circleTwo = document.querySelector('.progress-ring__circle_two');
  
  circleTwo.style.strokeDasharray = `${circumference} ${circumference}`;
  circleTwo.style.strokeDashoffset = circumference;
  
  function setProgressTwo(precent) {
    const offset = circumference - precent / 100 * circumference;
    circleTwo.style.strokeDashoffset = offset;
  }
  // Настройка третьего прогрессбара
  const circleThree = document.querySelector('.progress-ring__circle_three');
  
  circleThree.style.strokeDasharray = `${circumference} ${circumference}`;
  circleThree.style.strokeDashoffset = circumference;
  
  function setProgressThree(precent) {
    const offset = circumference - precent / 100 * circumference;
    circleThree.style.strokeDashoffset = offset;
  }
  // Настройка четвертого прогрессбара
  const circleFour = document.querySelector('.progress-ring__circle_four');
  
  circleFour.style.strokeDasharray = `${circumference} ${circumference}`;
  circleFour.style.strokeDashoffset = circumference;
  
  function setProgressFour(precent) {
    const offset = circumference - precent / 100 * circumference;
    circleFour.style.strokeDashoffset = offset;
  }

  // Создаем событие для секции Skills
  var element = document.querySelector('.skills-block');
  var Visible = function (target) {
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      setProgress(90);
      setProgressTwo(90);
      setProgressThree(75);
      setProgressFour(65);
      var show = true;
        if(!show) return false;
        document.querySelectorAll('.progress-ring__text_num').forEach(number => {
          let start = +number.innerHTML;
          const interval = setInterval(function() {
            number.innerHTML = ++start;
            if (start >= number.dataset.max) {
              clearInterval(interval);
            }
          }, 15);
          if (start >= number.dataset.max) {
            clearInterval(interval);
          }
        });
        show = false;
    }
  };
  // Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function() {
    Visible (element);
  });
  // А также запустим функцию сразу. А то вдруг, элемент изначально видно
  Visible (element);
}


// Табы
const tabsBtn = document.querySelectorAll('.tab-one-btn');
const tabsItems = document.querySelectorAll('.tabs-skills-content');
tabsBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function(item) {
        item.classList.remove('active');
      });
      tabsItems.forEach(function(item) {
        item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
});
// Табы
const tabsTwoBtn = document.querySelectorAll('.tab-two-btn');
const tabsTwoItems = document.querySelectorAll('.tabs__item');
tabsTwoBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains('active')) {
      tabsTwoBtn.forEach(function(item) {
        item.classList.remove('active');
      });
      tabsTwoItems.forEach(function(item) {
        item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
});
