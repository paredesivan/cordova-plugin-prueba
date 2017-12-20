//var exec = require('cordova/exec');
//
//module.exports = {
//
//    obtenerDatos: function (name,successCallback, errorCallback) {
//
//        //exec(successfunction, failfuncion, service, action, [args])
//        //service debe ser el nombre del declarado en el xml y el nombre de la clase
//        //action el nombre que sera tratado en el execute de java
//        //args son parametros de entrada a la funcion java
//        exec(successCallback, errorCallback, 'Prueba', 'obtenerDatosJava', [name]);
//    }
//
//    //ejemplo
//    //    cordova.exec(successCallback, funcion cuando el resultado es exitoso
//    //        errorCallback,     funcion cuando el resultado no es exitoso
//    //        "SendMail",        clase
//    //        "send",            metodo o funcion java
//    //        [{                 array
//    //            "subject":subject,
//    //            "body":body,
//    //            "sender":sender,
//    //            "password":password,
//    //            "recipients":recipients
//    //        }]
//    //    );
//};

module.exports = {
    obtenerDatos: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Prueba", "obtenerDatosJava", [name]);
    }
};