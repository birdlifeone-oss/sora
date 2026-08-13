const fadeOnlytargets = document.querySelectorAll('.fadeOnlyTrigger');
const fadeSlidetargets = document.querySelectorAll('.fadeSlideTrigger');

const options = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0
};

const observerFade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 要素が見えたら実行する処理
      entry.target.classList.add('fadeOnly');
    }
  });
},{
  root: null,
  rootMargin: '0px 0px -20% 0px',
  threshold: 0
});


const observerSlide = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 要素が見えたら実行する処理
      entry.target.classList.add('fadeSlide');
    }
  });
},{
  root: null,
  rootMargin: '0px 0px -5% 0px',
  threshold: 1
});

fadeOnlytargets.forEach(target => observerFade.observe(target));
fadeSlidetargets.forEach(target => observerSlide.observe(target));
