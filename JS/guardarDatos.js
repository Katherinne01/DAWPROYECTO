// Guardar los datos del usuario y las transacciones en localStorage
function guardarDatosUsuario() {
    const usuario = {
        name: "Ash Ketchum",
        pin: "1234",
        accountNumber: "PKB-1980-04071429",
        initialBalance: 500.00,
        transactions: [
            { type: "Deposito", amount: 100, date: "2024-11-01" },
            { type: "Retiro", amount: 50, date: "2024-11-02" },
            { type: "Pago de Servicios", amount: 30, date: "2024-11-03" },
            { type: "Recarga Pokedolares", amount: 20, date: "2024-11-04" },
            { type: "Retiro", amount: 40, date: "2024-11-18" }, 
            { type: "Deposito", amount: 60, date: "2024-11-18" }
        ]
    };
    
    // Guardar en localStorage como string
    localStorage.setItem("userData", JSON.stringify(usuario));
}
