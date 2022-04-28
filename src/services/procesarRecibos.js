const procesarRecibos = {
    
    imprimirRecibos(recibos) {
        
        console.log('Detalle recibos:')
        recibos.forEach(recibo => {
            console.log('Cliente:', recibo.cliente, ' - Importe: ', recibo.importe)
        });
        console.log('------------')
    },

    ordenarRecibosPorImporte(recibos) {
        
        //ordena recibos por importe de mayor a menor

        recibos.sort((b,a) => a.importe - b.importe);
        console.log('Recibos ordenados de mayor a menor por importe.')
        return recibos
    },

    filtrarRecibosXLetraCliente(recibos,letra) {
        
        //recibe array de recibos y letra para filtrar

        const recibos2 = recibos.filter(recibos => recibos.cliente.startsWith(letra) )

        console.log('Recibos filtrados por letra', letra)

        return recibos2
    },

    listaRecibosConAumento(recibos,porcentaje) {

        //recibe array de recibos y % de aumento
        
        console.log('Recibos con un % %d aplicado.',porcentaje)

        let importe2 = 0

        const recibos2 = recibos.map(

            recibo => {
                return { id: recibo.id, numero: recibo.numero, importe: importe2=recibo.importe+ recibo.importe*porcentaje/100, cliente: recibo.cliente} } )

        return recibos2

    },

}

export {procesarRecibos}