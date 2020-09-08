const pedido1 = {
    tipo: 'Cafe Vainilla',
    cliente: 'Robert'
}

const pedido2 = {
    tipo: 'Te Helado',
    cliente: 'Pablo'
}

function pedidoStarbucks(pedido, callbackCliente){
    switch (pedido.tipo) {
        case 'Cafe Vainilla':
            setTimeout(() => {
                callbackCliente(pedido);
            }, 4 * 1000);
            break;
        case 'Te Helado':
            setTimeout(() => {
                callbackCliente(pedido);
            }, 2 * 1000);
            break;
        default:
            break;
    }
}

pedidoStarbucks(pedido1, pedido => {
    console.log(`${pedido.tipo} esta listo, llamar a ${pedido.cliente}`);
});

pedidoStarbucks(pedido2, pedido => {
    console.log(`${pedido.tipo} esta listo, llamar a ${pedido.cliente}`);
});

console.log('PEDIDOS STARBUCKS');
