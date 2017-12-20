para agregar el plugin usar
cordova plugin add https://github.com/paredesivan/cordova-plugin-prueba

para remover el plugin
cordova plugin rm cordova-plugin-prueba

saludar :muestra un alert con el saludo. ejemplo:

        prueba.saludar("caballo", bien, mal);

        function bien(saludo) {
            alert(saludo);

        }

        function mal(m) {
            console.log("m: " + m);
        }

obtenerNombreDispositivo: muestra el fabricante y el modelo del celular. ejemplo:

        prueba.obtenerNombreDispositivo(si, no);

        function si(c) {
            console.warn("c: " + c);

        }

        function no(m) {
            console.log("m: " + m);
        }