// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);

let getUsuarioById = (id, micallback) => {

    let usuario = {
        nombre: 'Fernando',
        id
    }

    if (id === 20) {
        micallback(`El usuario con id ${ id }, no existe en la DB`);
    } else {
        micallback(null, usuario);
    }

    // micallback(usuario);
}

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);

});