var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.card'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.card__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($card) {
  $card.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--card-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--card-active');
    document.querySelector('.card.s--active').classList.remove('s--active');
  });
});





document.getElementById('menu').addEventListener('click', function () {
  var nav = document.getElementsByTagName('nav')[0];
  if (nav.style.display == 'block') {
      nav.style.display = 'none';
  } else {
      nav.style.display = 'block';
  }
}, false);