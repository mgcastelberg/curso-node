let empleados = [{
    id: 1,
    nombre: 'Manuel',
}, {
    id: 2,
    nombre: 'Monica',
}, {
    id: 3,
    nombre: 'Fatima',
}];

let salarios = [{
    id: 1,
    salario: 1000,
}, {
    id: 2,
    salario: 2000,
}];

//Promesa
// let getEmpleado = (id) => {

//     return new Promise((resolve, reject) => {
//         let empleadoDB = empleados.find(empleado => empleado.id === id);

//         if (!empleadoDB) {
//             reject(`No existe un empleado con el ID ${id}`);
//         } else {
//             resolve(empleadoDB);
//         }

//     });
// };
let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });
};

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro salario para: ${empleado.nombre}`);
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario,
            });
        }

    });
};

// getEmpleado(3).then(empleado => {
//     //console.log('Empleado de DB', empleado);
//     getSalario(empleado).then(salario => {
//         //console.log('Salario de DB', salario);
//         console.log(`El Salario de: ${salario.nombre} es de: $${salario.salario} con el ID: ${salario.id}`);
//     }, (err) => {
//         console.log(err);
//     });

// }, (err) => {
//     console.log(err);
// });

//RESUMIR
// getEmpleado(1).then(empleado => {
//     //console.log('Empleado de DB', empleado);
//     getSalario(empleado).then(salario => {
//         //console.log('Salario de DB', salario);
//         console.log(`El Salario de: ${salario.nombre} es de: $${salario.salario} con el ID: ${salario.id}`);
//     }, (err) => console.log(err));
// }, (err) => console.log(err));


//PROMESA ENCADENADA
getEmpleado(10).then(empleado => {
    return getSalario(empleado);
}).then(salario => {
    console.log(`El Salario de: ${salario.nombre} es de: $${salario.salario} con el ID: ${salario.id}`);
}).catch(err => {
    console.log(err);
});