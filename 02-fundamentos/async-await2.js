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

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    // console.log(resp);
    return `${empleado.nombre} tiene un salario de $${ resp.salario }`;
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));