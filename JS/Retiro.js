// Incluir SweetAlert
document.getElementById('formRetiro').addEventListener('submit', function(event) {
    var cantidadRetiro = document.getElementById('cantidadRetiro').value;
    var errorMessage = document.querySelector('.error');

    // Validar que la cantidad sea mayor que 5
    if (cantidadRetiro < 5) {
        event.preventDefault();  // Prevenir el envío del formulario
        errorMessage.textContent = "El monto a retirar debe ser mayor a 5.";

        // SweetAlert para monto no válido
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El monto a retirar debe ser mayor a 5.',
        });
    } else {
        errorMessage.textContent = "";  // Limpiar el mensaje de error
        // Mostrar la cantidad de retiro en el mensaje de éxito
        document.getElementById('cantidadRetiroExitoso').textContent = cantidadRetiro;

        // SweetAlert para retiro exitoso
        Swal.fire({
            icon: 'success',
            title: '¡Retiro Exitoso!',
            text: 'Has realizado un retiro de: ' + cantidadRetiro,
        });
    }
});