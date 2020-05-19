const menuBtn_show = document.querySelector('#menuBtn_show');
const menuBtn_close = document.querySelector('#menuBtn_close');
const nav = document.querySelector('#nav');

menuBtn_show.addEventListener('click', function () {
  nav.style.display = 'block';
});
menuBtn_close.addEventListener('click', function () {
  nav.style.display = 'none';
});

//Slide image

var count_image = 1;
changeImage = function () {
  var imgs = [
    'image/image1.jpg',
    'image/image2.jpg',
    'image/image3.jpg',
    'image/image4.jpg',
    'image/image5.jpg',
  ];
  document.querySelector('#img').src = imgs[count_image];
  count_image++;
  if (count_image == 5) {
    count_image = 0;
  }
};
setInterval(changeImage, 3000);
