function throttle(fn, delay) {
  let last;
  let timer;

  return () => {
    const now = +new Date;

    if (last && now < last + delay) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        last = now;
        fn();
      }, delay);
    } else {
      last = now;
      fn();
    }

  };
}

function onScroll() {
  if (window.pageYOffset) {
    $$header.classList.add('is-active');
  } else {
    $$header.classList.remove('is-active');
  }
}

const $$header = document.querySelector('.js-header');

window.addEventListener('scroll', throttle(onScroll, 25));

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
