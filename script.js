
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const sidebar = document.querySelector('.sidebar');

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            toggleButton.classList.toggle('right'); // <-- เพิ่มตรงนี้
        });
    }

    // Dark Mode (เหมือนเดิม)
    const darkModeToggle = document.querySelector('.switch-theme');
    const body = document.body;
    if (darkModeToggle && body) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            darkModeToggle.classList.toggle('active');
        });
    }
});