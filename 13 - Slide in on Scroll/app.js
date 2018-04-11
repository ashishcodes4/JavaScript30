function debounce(func, wait = 500, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


const imageSlider = document.querySelectorAll('.slide-in');

const checkSlide = (e) => {
    console.count(e);
}

window.addEventListener('scroll', debounce(checkSlide));