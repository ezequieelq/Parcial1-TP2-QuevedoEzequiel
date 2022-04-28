/*
1er Parcial TP2
Alumno: Ezequiel Quevedo

Se pide:
1 Crear un proyecto node ( 1 punto ).
2 Crear carpetas src y test, uso de módulos (1 punto).
3 Configurar scripts, instalar nodemon ( 1 punto ).
4 Recorrer e imprimir en terminal con el método foreach, mostrando cliente e importe
(1punto).
5 Ordenar por importe utilizando sort, mostrar el resultado en terminal ( 1 punto )
6 Nuevo array con clientes que empizan con letra 'R', usando la función filter , mostrar el resultado
en terminal (1 punto).
7 Nuevo array con la misma estructura de aRecibos, pero aumentando un 30% el importe, , mostrar
el resultado en terminal (1 punto) .
8 Crear un mensaje con timer de 7 seg al comienzo del código ( 1 punto )
9 Crear un archivo en forma sincrónica, agregar al archivo anterior la frase "nuevo texto" ( 1 punto )
10 Crear un repositorio en github y enviar el link por correo a manuel.caceres@ort.edu.ar ( 1 punto )
*/

const aRecibos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
]

import {procesarRecibos} from './services/procesarRecibos.js'
import fs from 'fs'

setTimeout(()=> {

    //pto 4
    procesarRecibos.imprimirRecibos(aRecibos)

    //pto 5
    console.log(procesarRecibos.ordenarRecibosPorImporte(aRecibos))

    //pto 6
    console.log(procesarRecibos.filtrarRecibosXLetraCliente(aRecibos,'R'))

    //pto 7
    console.log(procesarRecibos.listaRecibosConAumento(aRecibos,30))

    //pto 9

    try {
        fs.writeFileSync('./src/resources/parcial1.txt', '')
        fs.appendFileSync('./src/resources/parcial1.txt', 'nuevo texto\n')
        console.log('Escritura OK')
    } catch (err) {
        console.log(err)
    }

    //pto 8
    console.log('Pasaron 7 segundos...')
    console.log('Fin del proceso.')

}, 7000);

