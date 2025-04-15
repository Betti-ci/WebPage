const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted');
});
