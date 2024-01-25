document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      header.style.minHeight = '70px';
      header.style.backgroundColor = 'black';
      header.style.paddingTop = '20px'; // Убираем padding-top при прокрутке
    } else {
      header.style.minHeight = '126px';
      header.style.backgroundColor = 'transparent';
      header.style.paddingTop = '52px'; // Восстанавливаем изначальный padding-top
    }
  });
});
