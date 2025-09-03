// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 700,
        easing: 'ease-out-quart',
        once: false,
        offset: 80,
    });

    // Year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Contact modal handlers
    const modal = document.getElementById('contactModal');
    const openButtons = [
        document.getElementById('openContact'),
        document.getElementById('openContactFooter')
    ].filter(Boolean);
    const closeButton = document.getElementById('closeContact');

    const openModal = () => {
        if (!modal) return;
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    };
    const closeModal = () => {
        if (!modal) return;
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    };

    openButtons.forEach(btn => btn.addEventListener('click', openModal));
    if (closeButton) closeButton.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            const target = e.target;
            if (target === modal) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
        });
    }
});


