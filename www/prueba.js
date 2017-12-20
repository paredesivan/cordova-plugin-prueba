var exec = require('cordova/exec');

module.exports = {

    saludar: function (name, exito, falla) {

        //exec(successfunction, failfuncion, service, action, [args])
        //service debe ser el nombre del declarado en el xml y el nombre de la clase
        //action el nombre que sera tratado en el execute de java. PUEDE ser igual
        // al nombre de la funcion de aca
        //args son parametros de entrada a la funcion java
        exec(exito, falla, 'pruebita', 'saludo', [name]);
    },

    obtenerNombreDispositivo: function (successCallback, errorCallback) {

        exec(successCallback, errorCallback, 'pruebita', 'obtenerNombreDispositivo', []);
    }

    //ejemplo
    //    cordova.exec(successCallback, funcion cuando el resultado es exitoso
    //        errorCallback,     funcion cuando el resultado no es exitoso
    //        "SendMail",        clase
    //        "send",            metodo o funcion java
    //        [{                 array
    //            "subject":subject,
    //            "body":body,
    //            "sender":sender,
    //            "password":password,
    //            "recipients":recipients
    //        }]
    //    );
};

