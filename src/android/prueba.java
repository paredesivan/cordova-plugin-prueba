

package ar.com.prueba;

//esos 3 van si o si
import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;


public class prueba extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

    //si lo que entra por la funcion es ese nombre se debe ejecutar el codigo que corresponda
        if ("obtenerDatosJava".equals(action)) {
           return this.obtenerNombreDispositivo();
        }
        return false;
    }


    //metodo que brinda el nombre
    private String obtenerNombreDispositivo() {
          String manufacturer = Build.MANUFACTURER;
          String model = Build.MODEL;

          if (model.startsWith(manufacturer)) {
              return model;
          } else {
              return manufacturer + " " + model;
          }
    }
}



