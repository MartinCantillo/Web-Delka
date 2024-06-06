document.addEventListener('DOMContentLoaded', () => {
  const companySelect = document.getElementById('company-id');
  const databaseForm = document.getElementById('database-form');
  const databaseList = document.getElementById('database-list');
  const logoutBtn = document.getElementById('logout-btn');

  // Cargar las empresas en el select al cargar la página
  axios.get('/getEmpresas')
      .then(response => {
          const empresas = response.data;
          empresas.forEach(empresa => {
              const option = document.createElement('option');
              option.value = empresa.id; // Suponiendo que 'id' es el identificador único
              option.textContent = empresa.nombre; // Suponiendo que 'nombre' es el nombre de la empresa
              companySelect.appendChild(option);
          });
      })
      .catch(error => {
          console.error('Error al obtener las empresas:', error);
          alert('Hubo un error al cargar las empresas.');
      });

  // Manejar el envío del formulario para crear una nueva base de datos
  databaseForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const companyId = companySelect.value;
      const databaseName = document.getElementById('database-name').value;

      axios.post('/api/createDatabase', {
          company_id: companyId,
          database_name: databaseName
      })
      .then(response => {
          alert('Base de datos creada exitosamente.');
          databaseForm.reset();
          loadDatabases();
      })
      .catch(error => {
          console.error('Error al crear la base de datos:', error);
          alert('Hubo un error al crear la base de datos.');
      });
  });

  // Cargar la lista de bases de datos existentes
  function loadDatabases() {
      axios.get('/api/getEmpresas')
          .then(response => {
              const databases = response.data;
              databaseList.innerHTML = '';
              databases.forEach(db => {
                  const listItem = document.createElement('li');
                  listItem.textContent = `${db.nombre_empresa} (Empresa ID: ${db.id})`;
  
                  databaseList.appendChild(listItem);
              });
          })
          .catch(error => {
              console.error('Error al cargar las bases de datos:', error);
              alert('Hubo un error al cargar las bases de datos.');
          });
  }

  // Llamar a la función para cargar las bases de datos existentes al cargar la página
  loadDatabases();

  // Manejar el cierre de sesión
  logoutBtn.addEventListener('click', () => {
      axios.post('/api/logout')
          .then(() => {
              window.location.href = '/';
          })
          .catch(error => {
              console.error('Error al cerrar sesión:', error);
              alert('Hubo un error al cerrar sesión.');
          });
  });
});
