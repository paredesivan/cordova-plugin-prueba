

package com.example.plugin;

//esos 3 van si o si
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.apache.cordova.*;
import android.provider.Settings;


public class Prueba extends CordovaPlugin {


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        if (action.equals("obtenerDatosJava")) {

                    String name = args.getString(0);
                    String message = "Hello, " + name;
                    callbackContext.success(message);

                    return true;

                } else {

                    return false;

                }

    }


    //metodo que brinda el nombre
    private String obtenerNombreDispositivo() {
          //String manufacturer = android.os.Build.MANUFACTURER;
          //String model = android.os.Build.MODEL;

          //if (model.startsWith(manufacturer)) {
          //    return model;
          //} else {
          //    return manufacturer + " " + model;
          //}

          return "hola";
    }
}



