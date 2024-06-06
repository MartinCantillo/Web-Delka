document.addEventListener('DOMContentLoaded', () => {
    const agregarEmpresaForm = document.getElementById('agregar-empresa-form');
    const empresaList = document.getElementById('empresa-list');

    agregarEmpresaForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('empresa-nombre').value;
        const nit = document.getElementById('empresa-nit').value;
        const direccion = document.getElementById('empresa-direccion').value;
        const telefono = document.getElementById('empresa-telefono').value;

        if (nombre && nit && direccion && telefono) {
            agregarEmpresa(nombre, nit, direccion, telefono);
            agregarEmpresaForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    empresaList.addEventListener('click', (event) => {
        if (event.target.classList.contains('eliminar-btn')) {
            const empresaItem = event.target.closest('.empresa-item');
            const empresaId = empresaItem.dataset.id;
            eliminarEmpresa(empresaId);
        }
    });

    function agregarEmpresa(nombre, nit, direccion, telefono) {
        const empresaItem = document.createElement('li');
        empresaItem.classList.add('empresa-item');
        empresaItem.dataset.id = nit;

        empresaItem.innerHTML = `
            <span>${nombre} - NIT: ${nit} - Dirección: ${direccion} - Teléfono: ${telefono}</span>
            <button class="eliminar-btn">Eliminar</button>
        `;

        empresaList.appendChild(empresaItem);
    }

    function eliminarEmpresa(id) {
        const empresaItem = document.querySelector(`.empresa-item[data-id="${id}"]`);
        if (empresaItem) {
            empresaItem.remove();
        } else {
            alert('Empresa no encontrada.');
        }
    }

    function cerrarSesion() {
        // Simular una solicitud al servidor para cerrar la sesión
        
        // Mostrar un mensaje de confirmación
        if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
          // Lógica para cerrar sesión y redirigir al menú principal
          alert('Sesión cerrada. Redirigiendo al menú principal...');
          // Redirigir al menú principal (cambia la URL al menú principal)
          window.location.href = '/';  
        } else {
          // Si el usuario cancela, no se realiza ninguna acción
          return;
        }
      }
    });

