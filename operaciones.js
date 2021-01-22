const math = {};

function suma(n1,n2){
    return n1+n2;
}

function resta(n1,n2){
    return n1-n2;
}

function multiplicacion(n1,n2){
    return n1*n2;
}

function divicion(n1,n2){

    if (n2 == 0){
        console.log('No se puede dividir entre 0');
    }else{
        return n1 / n2;
    }
}

math.suma = suma;
math.resta = resta;
math.multiplicacion = multiplicacion;
math.divicion = divicion;

module.exports = math; //puede exportan una funcion, variable

exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion;
exports.divicion = divicion;