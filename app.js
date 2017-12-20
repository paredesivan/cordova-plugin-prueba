
    $ionicPlatform.ready(function () {


        prueba.saludar("caballo", bien, mal);

        function bien(c) {
            console.warn("c: " + c);

        }

        function mal(m) {
            console.log("m: " + m);
        }

        prueba.obtenerNombreDispositivo(si, no);

        function si(c) {
            console.warn("c: " + c);

        }

        function no(m) {
            console.log("m: " + m);
        }}
    );

