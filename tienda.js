let web3;
let userAccount;

window.addEventListener('load', async () => {
    // Comprobar si MetaMask está instalado
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        
        // Evento para el botón de conectar wallet
        document.getElementById('connect-wallet').addEventListener('click', connectWallet);
        
        // Escuchar cambios de cuenta
        window.ethereum.on('accountsChanged', function (accounts) {
            userAccount = accounts[0];
            updateWalletStatus();
        });
    } else {
        alert('Por favor, instala MetaMask para usar la tienda.');
    }
});

async function connectWallet() {
    try {
        // Solicitar acceso a la cuenta
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAccount = accounts[0];
        updateWalletStatus();
    } catch (error) {
        console.error(error);
        alert('Error al conectar con MetaMask');
    }
}

function updateWalletStatus() {
    const walletAddress = document.getElementById('wallet-address');
    if (userAccount) {
        walletAddress.textContent = userAccount.substring(0, 6) + '...' + userAccount.substring(38);
    } else {
        walletAddress.textContent = 'No conectado';
    }
}

async function comprarProducto(button) {
    if (!userAccount) {
        alert('Por favor, conecta tu wallet primero');
        return;
    }

    const producto = button.getAttribute('data-producto');
    const precioETH = button.parentElement.getAttribute('data-precio');
    const precioWei = web3.utils.toWei(precioETH, 'ether');

    try {
        // Crear la transacción
        const transactionParameters = {
            to: '0xTuDireccionDeWallet', // ¡Reemplaza esto con tu dirección de wallet!
            from: userAccount,
            value: web3.utils.toHex(precioWei),
        };

        // Enviar la transacción
        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });

        alert(`¡Compra exitosa! Hash de la transacción: ${txHash}`);
        
        // Aquí podrías agregar código para registrar la compra en tu backend
        registrarCompra(producto, txHash);

    } catch (error) {
        console.error(error);
        alert('Error en la transacción');
    }
}

function registrarCompra(producto, txHash) {
    // Aquí implementarías la lógica para registrar la compra en tu backend
    console.log(`Compra registrada: ${producto} - Transaction: ${txHash}`);
} 