const noJs = document.querySelector('.no-js');
noJs.classList.remove('no-js');
let navMain = document.querySelector('.main-header');
let navToggle = document.querySelector('.toggle');

navToggle.addEventListener('click', function () {
navMain.classList.toggle('main-header--show');
});
