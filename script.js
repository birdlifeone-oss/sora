const fadetexttargets = document.querySelectorAll('.fadetextTrigger');
// 画面幅で条件分岐
const isPC = window.matchMedia('(min-width: 1025px)').matches;
// rootMargin も必要ならここで分岐可能
const textRootMargin = isPC ? '0px 0px -20% 0px' : '0px 0px -30% 0px';


const observerFade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 要素が見えたら実行する処理
      entry.target.classList.add('fadetext');
    }
  });
},{
  root: null,
  rootMargin: textRootMargin,
  threshold: 0
});


fadetexttargets.forEach(target => observerFade.observe(target));


const fadeimgtargets = document.querySelectorAll('.fadeimgTrigger');



// PC：画像が半分見えたら → threshold: 0.5  
// タブレット以下：画像が全部入ったら → threshold: 1
const imgThreshold = isPC ? 0.5 : 1;

// rootMargin も必要ならここで分岐可能
const imgRootMargin = isPC ? '0px 0px -5% 0px' : '0px 0px 0px 0px';

const observerSlide = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeimg');
    }
  });
},{
  root: null,
  rootMargin: imgRootMargin,
  threshold: imgThreshold
});

fadeimgtargets.forEach(target => observerSlide.observe(target));

