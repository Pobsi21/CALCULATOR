document.addEventListener('DOMContentLoaded', () => {
    const settingsToggle = document.getElementById('settings-toggle');
    const modal = document.getElementById('settings-modal');
    const closeBtn = document.querySelector('.close-btn');
    const toggleThemeBtn = document.getElementById('toggle-theme');

    // Open modal
    settingsToggle.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Toggle theme
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});

function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
