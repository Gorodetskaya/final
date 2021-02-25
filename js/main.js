$('.slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
});


let btnsContainer = document.querySelector('.btns-container');

function clearClass(arrElements, classNameEl) {
for (let i = 0; i < arrElements.length; i++) {
const btn = arrElements[i];
if(btn.classList.contains(classNameEl)) {
btn.classList.remove(classNameEl)
}
}
// Array.from(arrElements)
//   .filter(btn => btn.classList.contains(classNameEl))
//   .map(btn => btn.classList.remove(classNameEl));
}

btnsContainer.addEventListener('click', function(e) {
  debugger
  let currentEl = e.target;
  if(!currentEl.classList.contains('btn')) return;

  let btn = currentEl;
  if(btn.classList.contains('active')) return;

  let btns = this.querySelectorAll('.btn');
  clearClass(btns, 'active');
  btn.classList.add('active');

  let items = document.querySelectorAll('.item');
  let btnId = btn.id;

  clearClass(items, 'hide');

  if(btnId === 'item-all') return;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    let dataValue = item.dataset.item;
    if(dataValue !== btnId) {
      item.classList.add('hide');
    }
  }
});

/* modal */
let btnShowModal = document.querySelector('.btn-show');
let btnCloseModal = document.querySelector('.btn-close');
let modal = document.querySelector('.modal-container');

function showModal() {
  let body = document.querySelector('body');
  let widthAll = window.innerWidth;
  let widthNotScroll = body.offsetWidth;
  let paddingRight =  widthAll - widthNotScroll;
  let name = document.querySelector('.input-name');
  let nameValue = name.value;
  let errorMessage = document.querySelector('.error-message');

  if(nameValue) {
    let htmltagName = document.querySelector('.name');

    htmltagName.innerHTML = nameValue;

    body.classList.add('remove-scroll');
    body.style.paddingRight = `${paddingRight}px`;
    modal.classList.add('show');
    errorMessage.classList.remove('show'); 
  } else {
    errorMessage.classList.add('show'); 
  }
}

function closeModal() {
  let body = document.querySelector('body');

  body.style.paddingRight = '0';
  body.classList.remove('remove-scroll');
  modal.classList.remove('show');
}

document.addEventListener('keydown', function(e){
  if(e.code == 'Enter') {
    e.preventDefault();
    showModal();
  };
  if(e.code == 'Escape') {
    e.preventDefault();
    closeModal();
  };
});

$(function () {
  var $videoContainer = $('#video'),
    $videoControls = $('.video-control'),
    $video = $('#myVideo')[0];

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      //  возвращаем постер
      $video.load();
    }
  });
});

$(document).ready(function(){
  $('.header-burger').click(function(event) {
    $('.header-burger,.nav').toggleClass('active');
  })
})

btnShowModal.addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);

modal.addEventListener('click', function(e){
  if (this === e.target) {
    closeModal();
  }
});

