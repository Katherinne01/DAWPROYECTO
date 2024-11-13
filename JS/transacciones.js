 // Array para almacenar las transacciones
 let transactions = [];

 // Función para agregar una nueva transacción al historial
 function addTransaction(description, amount) {
     const date = new Date().toLocaleString(); // Obtener fecha y hora actual
     transactions.push({ date, description, amount }); // Agregar transacción al array
     renderTransactions(); // Actualizar la tabla
 }

 // Función para renderizar el historial de transacciones en la tabla
 function renderTransactions() {
     const tbody = document.querySelector('#transaction-history-table tbody');
     tbody.innerHTML = ''; // Limpiar el contenido previo

     transactions.forEach(transaction => {
         const tr = document.createElement('tr');

         // Crear las celdas de la tabla
         const dateTd = document.createElement('td');
         dateTd.textContent = transaction.date;

         const descriptionTd = document.createElement('td');
         descriptionTd.textContent = transaction.description;

         const amountTd = document.createElement('td');
         amountTd.textContent = transaction.amount;

         // Agregar celdas a la fila
         tr.appendChild(dateTd);
         tr.appendChild(descriptionTd);
         tr.appendChild(amountTd);

         // Agregar la fila al tbody
         tbody.appendChild(tr);
     });
 }

 // Ejemplo: Simulación de transacciones iniciales
 addTransaction('Depósito', '2000 PokéDólares');
 addTransaction('Retiro', '500 PokéDólares');
 addTransaction('Transferencia', '300 PokéDólares');

 // Evento para filtrar las transacciones por rango de fechas
 document.getElementById('consultar-form').addEventListener('submit', function(event) {
     event.preventDefault(); // Evita el envío del formulario

     const fechaInicio = new Date(this.querySelector('input[name="fechaInicio"]').value);
     const fechaFin = new Date(this.querySelector('input[name="fechaFin"]').value);

     const tbody = document.querySelector('#transaction-history-table tbody');
     tbody.innerHTML = ''; // Limpiar el contenido previo

     transactions.forEach(transaction => {
         const transactionDate = new Date(transaction.date);

         // Filtrar transacciones dentro del rango de fechas
         if (transactionDate >= fechaInicio && transactionDate <= fechaFin) {
             const tr = document.createElement('tr');

             // Crear las celdas de la tabla
             const dateTd = document.createElement('td');
             dateTd.textContent = transaction.date;

             const descriptionTd = document.createElement('td');
             descriptionTd.textContent = transaction.description;

             const amountTd = document.createElement('td');
             amountTd.textContent = transaction.amount;

             // Agregar celdas a la fila
             tr.appendChild(dateTd);
             tr.appendChild(descriptionTd);
             tr.appendChild(amountTd);

             // Agregar la fila al tbody
             tbody.appendChild(tr);
         }
     });
 });