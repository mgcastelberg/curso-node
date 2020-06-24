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

// let getEmpleado(id, callback) => {
//     empleadoDB = empleados.find(empleado => {
//         return empleado.id === id;
//     });
// }


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }

    //console.log(empleadoDB);
};

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No existe un salario para el empleado con Nombre: ${empleado.nombre}`);
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario,
        });
    }
};

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        // console.log(salario);
        console.log(`El Salario de: ${salario.nombre} es de: ${salario.salario} con el ID: ${salario.id}`);
    });

    //console.log(empleado);
});