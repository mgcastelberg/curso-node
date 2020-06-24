/*
 * Async Await ESMASC 7
 */

// let getNombre = async() => {
//     //throw new Error('No existe un nombre para ese usuario');
//     return 'Manuel';
// };

let getNombre = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Manuel');
        }, 3000);

    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}

//console.log(getNombre());

// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(e => {
//     console.log('Erron de Async', e);
// });
saludo().then(mensaje => {
    console.log(mensaje);
});