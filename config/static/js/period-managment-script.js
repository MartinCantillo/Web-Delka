document.addEventListener('DOMContentLoaded', () => {
    // Obtener la lista de empresas desde la API y rellenar el select
    const companySelect = document.getElementById('company-name');

    axios.get('/api/empresas')
        .then(response => {
            const empresas = response.data;

            empresas.forEach(empresa => {
                const option = document.createElement('option');
                option.value = empresa.id;  // assuming the company ID is used for value
                option.textContent = empresa.nombre;  // assuming the company name is used for display
                companySelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching company names:', error);
            alert('Hubo un error al cargar los nombres de las empresas.');
        });

    // Gestionar el envío del formulario
    const form = document.getElementById('period-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Obtener los valores del formulario
        const companyId = companySelect.value;
        const periodDuration = document.getElementById('period-duration').value;

        // Validar que los campos estén completos
        if (companyId === '' || periodDuration === '') {
            alert('Todos los campos son obligatorios.');
            return;
        }

        // Enviar los datos del formulario a la API
        axios.post('/api/periodos', {
            empresa_id: companyId,
            duracion: periodDuration
        })
        .then(response => {
            alert('Periodo guardado exitosamente.');
            form.reset();  // Reset the form after successful submission
        })
        .catch(error => {
            console.error('Error saving period:', error);
            alert('Hubo un error al guardar el periodo.');
        });
    });
});
