function saludar(nombre) {
    let mensaje = `hola ${ nombre }`;
    return mensaje;
}

let saludo = saludar('Manuel');

console.log(saludo);