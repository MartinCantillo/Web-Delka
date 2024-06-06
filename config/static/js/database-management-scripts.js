document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById('logout-btn');
    const databaseForm = document.getElementById('database-form');
    const databaseList = document.getElementById('database-list');
  
    // Función para cerrar sesión
    function cerrarSesion() {
      alert('Sesión cerrada. Redirigiendo al menú principal...');
      window.location.href = '/';  // Cambia 'index.html' por la URL de tu menú principal
    }
  
    // Función para manejar la creación de bases de datos
    function handleCreateDatabase(event) {
      event.preventDefault();
      const companyId = document.getElementById('company-id').value;
      const databaseName = document.getElementById('database-name').value;
  
      if (companyId && databaseName) {
        // Aquí puedes agregar la lógica para enviar estos datos al servidor
        alert(`Base de datos ${databaseName} creada para la empresa ${companyId}`);
        addDatabaseToList(companyId, databaseName);
        // Restablecer el formulario
        databaseForm.reset();
      } else {
        alert('Por favor, complete todos los campos.');
      }
    }
  
    // Función para agregar una base de datos a la lista
    function addDatabaseToList(companyId, databaseName) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>ID de la Empresa: <strong>${companyId}</strong></span>
        <span>Nombre de la Base de Datos: <strong>${databaseName}</strong></span>
        <button onclick="deleteDatabase(this)">Eliminar</button>
      `;
      databaseList.appendChild(li);
    }
  
    // Función para eliminar una base de datos de la lista
    window.deleteDatabase = function(button) {
      const li = button.parentElement;
      li.remove();
      // Aquí puedes agregar la lógica para eliminar la base de datos del servidor
      alert('Base de datos eliminada.');
    }
  
    // Asignar eventos
    logoutBtn.addEventListener('click', cerrarSesion);
    databaseForm.addEventListener('submit', handleCreateDatabase);
  });
  