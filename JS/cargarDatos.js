// cargarDatos.js o localStorageManager.js
function cargarDatosUsuario() {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
        const userData = JSON.parse(storedData); // Convertir a objeto de nuevo
        document.getElementById('user-name').innerText = userData.name;
        document.getElementById('user-balance').innerText = userData.initialBalance.toFixed(2);
        return userData;  // Devolver los datos del usuario
    } else {
        // Si no hay datos en localStorage, devolver valores predeterminados
        return null;
    }
}

// Llamar a cargarDatosUsuario al cargar la página
window.onload = function() {
    const userData = cargarDatosUsuario();
    if (userData) {
        // Aquí puedes utilizar los datos cargados para hacer algo adicional
    }
};
