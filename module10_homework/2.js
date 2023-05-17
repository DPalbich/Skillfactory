const button = document.querySelector(".btn");

button.addEventListener('click', () => {
   alert(`Ширина: ${window.screen.width} Высота: ${window.screen.height}`);
});