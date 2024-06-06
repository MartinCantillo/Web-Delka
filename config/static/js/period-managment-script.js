// Función para cerrar sesión
function cerrarSesion() {
    // Mostrar un mensaje de confirmación antes de cerrar la sesión
    if (confirm('¿Estás seguro de que deseas cerrar la sesión?')) {
        // Si el usuario confirma, redirigir al menú principal
        redirigirAlMenuPrincipal();
    }
}

// Función para redirigir al menú principal
function redirigirAlMenuPrincipal() {
    alert('Sesión cerrada. Redirigiendo al menú principal...');
    window.location.href = '/'; 
}

// Función para manejar el envío del formulario
function gestionarEnvioFormulario(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
    
    // Obtener los valores del formulario
    var companyName = document.getElementById('company-name').value;
    var periodDuration = document.getElementById('period-duration').value;
    
    // Validar los datos del formulario (aquí puedes agregar tu lógica de validación)
    if (!companyName || !periodDuration || isNaN(periodDuration) || periodDuration < 1) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }
    
    // Aquí puedes enviar los datos del formulario a través de una solicitud AJAX o hacer cualquier otra acción necesaria
    // Por ahora, simplemente mostraremos los valores en la consola
    console.log('Nombre de la empresa:', companyName);
    console.log('Duración del período:', periodDuration);
    
    // Limpiar el formulario después de enviar
    document.getElementById('company-name').value = '';
    document.getElementById('period-duration').value = '';
}

// Agregar un controlador de eventos al botón de cerrar sesión cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    var cerrarSesionBtn = document.getElementById('cerrarSesionBtn');
    if (cerrarSesionBtn) {
        cerrarSesionBtn.addEventListener('click', cerrarSesion);
    } else {
        console.error('El botón de cerrar sesión no se ha encontrado.');
    }
    
    // Agregar un controlador de eventos para el envío del formulario
    var periodForm = document.getElementById('period-form');
    if (periodForm) {
        periodForm.addEventListener('submit', gestionarEnvioFormulario);
    } else {
        console.error('El formulario de período no se ha encontrado.');
    }
});
