function initGHLSection() {
    const buttons = document.querySelectorAll('.ghl-tab-btn');
    const panels = document.querySelectorAll('.ghl-tab-panel');

    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-ghl-tab');

            buttons.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');

            const targetPanel = document.getElementById('ghl-tab-' + target);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}