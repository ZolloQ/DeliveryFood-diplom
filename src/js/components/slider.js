document.addEventListener("DOMContentLoaded", function () {
  let menuSlider = document.getElementById("menuSlider");
  let menuItems = menuSlider.querySelectorAll(".menu__partition");
  let totalItems = menuItems.length;
  let itemsToShow = 6;
  let currentPosition = 0;

  // Функция для обновления видимости элементов
  function updateVisibility() {
    menuItems = menuSlider.querySelectorAll(".menu__partition"); // Обновляем список элементов после клонирования
    menuItems.forEach(function (item, index) {
      if (index < itemsToShow) {
        item.style.opacity = 1; // Показываем элемент
      } else {
        item.style.opacity = 0; // Скрываем элемент
      }
    });
  }

  // Функция для сдвига слайдера влево
  function slideLeft() {
    // Клонируем последний элемент и вставляем его перед первым элементом
    let lastItemClone = menuSlider.lastElementChild.cloneNode(true);
    menuSlider.insertBefore(lastItemClone, menuSlider.firstChild);

    // С выводом нового элемента изображение станет последним, его нужно немедленно скрыть
    menuSlider.lastElementChild.style.opacity = 0;

    // Обновим слайдер с новым клонированным элементом
    updateVisibility();

    // Применяем сдвиг для показа клонированного элемента без перехода
    menuSlider.style.transition = 'none';
    menuSlider.style.transform = `translateX(-${100 / itemsToShow}%)`;

    // Включаем переход и перемещаем слайдер обратно, чтобы показать новый элемент
    setTimeout(() => {
      menuSlider.style.transition = 'transform 0.5s ease-out';
      menuSlider.style.transform = 'translateX(0)';
    }, 30);

    // По завершении анимации перемещения удаляем последний оригинальный элемент
    setTimeout(() => {
      menuSlider.removeChild(menuSlider.lastElementChild);
    }, 530);
  }

  // Функция для сдвига слайдера вправо
  function slideRight() {
    // Клонируем первый элемент и вставляем его после последнего элемента
    let firstItemClone = menuSlider.firstElementChild.cloneNode(true);
    menuSlider.appendChild(firstItemClone);

    // Запускаем анимацию исчезновения для последнего элемента
    let lastItem = menuSlider.lastElementChild;
    lastItem.style.opacity = 0;

    // Применим сдвиг слайдера к последнему элементу
    menuSlider.style.transform = `translateX(-${100 / itemsToShow}%)`;

    // После таймаута обратно переместим слайдер на первый элемент
    setTimeout(() => {
      menuSlider.style.transition = 'none';
      menuSlider.style.transform = 'translateX(0)';
      // Удалим первый оригинальный элемент, который теперь является вторым
      menuSlider.removeChild(menuSlider.firstElementChild);
      // Обновим список дочерних элементов
      updateVisibility();
    }, 500);

    // Вернем применение анимации после ее удаления
    setTimeout(() => {
      menuSlider.style.transition = 'transform 0.5s ease-out';
    }, 520);
  }

  // Подписываем функции на события клика
  document.getElementById("slideLeft").addEventListener("click", slideLeft);
  document.getElementById("slideRight").addEventListener("click", slideRight);

  // Обновим видимость элементов впервые
  updateVisibility();
});
