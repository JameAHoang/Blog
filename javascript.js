const menuBtn_show = document.querySelector('#menuBtn_show');
const menuBtn_close = document.querySelector('#menuBtn_close');
const nav = document.querySelector('#nav');

menuBtn_show.addEventListener('click', function () {
  nav.style.display = 'block';
});
menuBtn_close.addEventListener('click', function () {
  nav.style.display = 'none';
});
