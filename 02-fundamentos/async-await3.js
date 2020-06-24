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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
        //return `No existe un empleado con el ID ${id}`;
    } else {
        return empleadoDB;
    }
};

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontro salario para: ${empleado.nombre}`);
    } else {
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario,
        };
    }
};

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    // console.log(resp);
    return `${empleado.nombre} tiene un salario de $${ resp.salario }`;
}

getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));