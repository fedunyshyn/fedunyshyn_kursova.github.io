    const scrollBtn = document.querySelector('.scroll-top-btn');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
    scrollBtn.style.display = 'flex';
} else {
    scrollBtn.style.display = 'none';
}
});

    scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

    const openBtn = document.querySelector('.btn');
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.contact-modal-close');
    const form = document.querySelector('.contact-form');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('Дякуємо! Ваше повідомлення успішно надіслано 😊');

        form.reset();
        closeModal();
    });