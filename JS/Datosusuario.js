const userData = {
    name: "Ash Ketchum",
    pin: "1234",
    accountNumber: "0987654321",
    initialBalance: 500.00
};

// Función para validar el login
function validateLogin() {
    const enteredPin = document.getElementById("password").value;
    const enteredName = document.getElementById("username").value;

    if (enteredPin === userData.pin && enteredName === userData.name) {
        // Redirige a MenuPokemonBank.html después de una confirmación exitosa
        Swal.fire({
            text: `Bienvenido, ${userData.name}!`,
            confirmButtonText: 'Continuar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "MenuPokemonBank.html";
            }
        });
    } else {
        // Alerta de error en caso de PIN o nombre incorrecto
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'PIN o Nombre incorrecto. Intente nuevamente.',
            confirmButtonText: 'Reintentar'
        });
    }
}


function mostrarExito() {
    Swal.fire({
        icon: 'success',
        title: '¡Cambio de PIN exitoso!',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "Index.html"; // Redirige a index.html después de cerrar el modal
        }
    });
}