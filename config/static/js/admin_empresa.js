document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('agregar-empresa-form');
    const empresaList = document.getElementById('empresa-list');

    // Cargar empresas al iniciar la página
    cargarEmpresas();

    // Manejar el evento de envío del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío tradicional del formulario
        agregarEmpresa();
    });

    // Función para cargar la lista de empresas
    async function cargarEmpresas() {
        try {
            const response = await axios.get('/api/getEmpresas');
            const empresas = response.data;
            empresaList.innerHTML = '';
            empresas.forEach(empresa => {
                const listItem = document.createElement('li');
                listItem.textContent = `${empresa.nombre} - ${empresa.descripcion} - ${empresa.periodo_activo}`;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.addEventListener('click', () => eliminarEmpresa(empresa.id));
                listItem.appendChild(deleteButton);
                empresaList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error al cargar las empresas:', error);
        }
    }

    // Función para agregar una nueva empresa
    async function agregarEmpresa() {
        const nombre = document.getElementById('empresa-nombre').value;
        const descripcion = document.getElementById('Descripcion').value;
        const periodoActivo = document.getElementById('Periodo Activo').value;
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('Contraseña').value;

        try {
            const response = await axios.post('/api/EmpresaApi', {
                nombre,
                descripcion,
                periodo_activo: periodoActivo,
                usuario,
                contraseña
            });
            alert('Empresa agregada exitosamente');
            form.reset();
            cargarEmpresas();
        } catch (error) {
            console.error('Error al agregar la empresa:', error);
        }
    }

    // Función para eliminar una empresa
    async function eliminarEmpresa(id) {
        try {
            await axios.delete(`/api/EmpresaApi/${id}`);
            alert('Empresa eliminada exitosamente');
            cargarEmpresas();
        } catch (error) {
            console.error('Error al eliminar la empresa:', error);
        }
    }

    // Manejar el cierre de sesión
    document.getElementById('cerrar-sesion').addEventListener('click', () => {
        // Lógica para cerrar sesión y redirigir al menú principal
        alert('Sesión cerrada. Redirigiendo al menú principal...');
        window.location.href = '/';
    });
});
