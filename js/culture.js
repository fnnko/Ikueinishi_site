const menu = document.getElementById("hamburgermenu");
const toggleIcon = document.getElementById("menu-toggle");
const mask = document.getElementById("mask");

toggleIcon.addEventListener("click", function (ev) {
    menu.classList.toggle("active");
});

// マスク部をクリックするとメニューを非アクティブにする。
mask.addEventListener("click", function (ev) {
    menu.classList.remove("active");
})

document.addEventListener("DOMContentLoaded", function() {
    const box3 = document.querySelector('.box_3');
    const int1 = document.getElementById('int1');
    const int2 = document.getElementById('int2');
    const int3 = document.getElementById('int3');
    const int4 = document.getElementById('int4');
    const int5 = document.getElementById('int5');

    int1.addEventListener('click', () => {
        int1.classList.toggle('scale');
    });

    int2.addEventListener('click', () => {
        int1.classList.toggle('scale');
    });

    int3.addEventListener('click', () => {
        int1.classList.toggle('scale');
    });

    int4.addEventListener('click', () => {
        int1.classList.toggle('scale');
    });

    int5.addEventListener('click', () => {
        int1.classList.toggle('scale');
    });
})

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
// 自動で動いてくれる↓
    spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
// スライドが無限ループ↓
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
  });