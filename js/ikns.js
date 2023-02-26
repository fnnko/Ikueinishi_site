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

//画像をクリックしたら現れる画面の設定  
$(".gallery-list").modaal({
  fullscreen:'true', //フルスクリーンモードにする
  before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
  },
  after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
  }
});
