document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        // Obtener los valores de los campos del formulario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        // Validar los campos (esto es solo un ejemplo simple)
        if (username === '' || password === '' || role === '') {
            errorMessage.textContent = 'Todos los campos son obligatorios.';
            errorMessage.style.display = 'block';
        } else if (username !== 'admin' || password !== 'admin123') { // Simulación de validación
            errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos.';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            window.location.href = '/menu_principal';
            alert(`Bienvenido, ${username}`);
        }
    });
});
