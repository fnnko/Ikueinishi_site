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
