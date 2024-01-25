// console.log('maxgraph');
// document.addEventListener('DOMContentLoaded', () => {
//   const menuLinks = document.querySelectorAll('.nav__link');
//   const dropdownMenus = document.querySelectorAll('.nav__link + .nav__dropdown');

//   function closeAllDropdowns() {
//     dropdownMenus.forEach(dropdown => {
//       dropdown.style.opacity = '0';
//       dropdown.style.visibility = 'hidden';
//     });
//     menuLinks.forEach(link => {
//       const icon = link.querySelector('.nav__icon');
//       if (icon) {
//         icon.classList.remove('nav__icon--rotated'); // Убираем класс для возвращения стрелки
//       }
//     });
//   }

//   menuLinks.forEach(link => {
//     link.addEventListener('mouseenter', function () {
//       closeAllDropdowns(); // Закрываем все меню
//       const dropdown = this.nextElementSibling; // Получаем выпадающее меню
//       if (dropdown) {
//         dropdown.style.opacity = '1';
//         dropdown.style.visibility = 'visible';
//       }
//       const icon = this.querySelector('.nav__icon');
//       if (icon) {
//         icon.classList.add('nav__icon--rotated');
//       }
//     });

//     // Запускаем закрытие с задержкой для обработки перехода мыши с ссылки на меню
//     link.addEventListener('mouseleave', (event) => {
//       setTimeout(() => {
//         const relatedTarget = event.relatedTarget;
//         if (!relatedTarget || !relatedTarget.closest('.nav__dropdown')) {
//           closeAllDropdowns();
//         }
//       }, 100);
//     });
//   });

//   dropdownMenus.forEach(dropdown => {
//     dropdown.addEventListener('mouseleave', () => {
//       closeAllDropdowns();
//     });
//   });

//   document.addEventListener('click', (event) => {
//     if (!event.target.closest('.nav__link, .nav__dropdown')) {
//       closeAllDropdowns();
//     }
//   });
// });
