document.addEventListener('DOMContentLoaded', () => {
  let backToTop = document.querySelector('#backToTop');
  let navigator = document.querySelector('.navigator');

  window.onscroll = () => {
    btnBackToTopToggle();
    fixedNavigator();
  };

  backToTop.onclick = () => {
    scrollToTop();
  };

  const btnBackToTopToggle = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > window.innerHeight / 2) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  };

  const fixedNavigator = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      navigator.classList.add('fixed');
    } else {
      navigator.classList.remove('fixed');
    }
  };

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.scrollTo(0, c - c / 8);
      window.requestAnimationFrame(scrollToTop);
    }
  };
});
