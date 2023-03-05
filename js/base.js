// function showElementAnimation() {

//   var element = document.getElementsByClassName('js-animation');
//   console.log(element)
//   if (!element) return; // 要素がなかったら処理をキャンセル

//   var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
//   var scrollY = window.pageYOffset;
//   var windowH = window.innerHeight;

//   for (var i = 0; i < element.length; i++) {
//     var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if (scrollY + windowH - showTiming > elemY) {
//       element[i].classList.add('is-show');
//     } else if (scrollY + windowH < elemY) {
//       // 上にスクロールして再度非表示にする場合はこちらを記述
//       element[i].classList.remove('is-show');
//     }
//   }
// }
// showElementAnimation();
// window.addEventListener('scroll', showElementAnimation);


let screenHeight = window.screen.height;
// let screenWidth = window.screen.width;
var shopBox =document.getElementsByClassName('shop_box');

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  if(shopBox[0].getBoundingClientRect().top < scroll){
    shopBox[0].classList.add("test");
  }
});


var element = document.getElementsByClassName('js-animation');
window.setTimeout(() => {
  element[0].classList.add('is-show');
}, 1000);
window.setTimeout(() => {
  element[1].classList.add('is-show');
}, 2000);
window.setTimeout(() => {
  element[2].classList.add('is-show');
}, 3000);
window.setTimeout(() => {
  element[3].classList.add('is-show');
}, 4000);

var title_visible = document.getElementsByClassName('title');
window.setTimeout(() => {
  title_visible[0].classList.add('title_visible');
}, 50)

// window.addEventListener('DOMContentLoaded', function() {
//   var swiper = new Swiper('sample01 .swiper-container', {
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     loop: true
//   });
// }, false);


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
// 無限ループ
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 自動で動いてくれる↓
  spaceBetween: 30,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true, // ループ有効
  slidesPerView: 2, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
    // reverseDirection: true, // 逆方向有効化
  },


});