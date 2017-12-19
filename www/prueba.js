/**
 * Creado por ivan fecha 19/12/17.
 */
var exec = require('cordova/exec');

module.exports = {

    obtenerDatos: function (successCallback, errorCallback) {

        //exec(successfunction, failfuncion, service, action, [args])
        //service debe ser el nombre del declarado en el xml y action el nombre que sera tratado en el execute de java
        exec(successCallback, null, 'prueba', 'obtenerDatosJava', [successCallback, errorCallback]);
    }
};