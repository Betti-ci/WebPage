const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted');
});

// Chiudi sidebar quando si clicca un link del menu
const navLinks = document.querySelectorAll('.sidebar nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        mainContent.classList.remove('shifted'); // se vuoi che anche il contenuto torni al posto originale
    });
});
