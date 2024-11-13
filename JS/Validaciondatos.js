document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de forma tradicional
    
    // Aquí puedes hacer la validación o enviar los datos del formulario con AJAX
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expMonth = document.getElementById('expMonth').value;
    const expYear = document.getElementById('expYear').value;

    if (cardName && cardNumber && expMonth && expYear) {
        // Si los datos son válidos, mostrar SweetAlert
        Swal.fire({
            title: '¡Pago Exitoso!',
            text: 'Tu pago ha sido procesado con éxito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, revisa los datos del pago.',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
        });
    }
});


