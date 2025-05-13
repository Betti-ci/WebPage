document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene invio reale

        // Simula invio
        setTimeout(() => {
            form.reset();
            status.classList.remove('hidden');
        }, 500);
    });
});
