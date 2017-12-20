
//en packpage debe ir la ruta donde se encuentra este archivo, pero separada por puntos
package com.paredesivan.plugin;

//esos 3 van si o si
import org.json.JSONArray;  //obligatorio
import org.json.JSONException; //obligatorio
import org.apache.cordova.*;

//la clase publica debe tener el mismo nombre que el archivo
public class Prueba extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        //el nombre con el que se llama desde el exec del archivo js
        if (action.equals("saludo")) {


           String nombre = args.getString(0); //obtiene el estring de la primer llave del JSONArray
           String mensaje = "Hola, " + nombre;

           //la devolucion que le da al js
           callbackContext.success(mensaje);

           return true;

        }


        if (action.equals("obtenerNombreDispositivo")){
            callbackContext.success(obtenerNombreDispositivo());
            return true;
        }

        else {
           return false;
        }

    }


    //metodo que brinda el nombre
    private String obtenerNombreDispositivo() {

        String manufacturer = android.os.Build.MANUFACTURER;
        String model = android.os.Build.MODEL;

        if (model.startsWith(manufacturer)) {
          return model;
        } else {
          return manufacturer + " " + model;
        }

    }
}



