import app from "./src/server";
import dbCon from "./src/config/dbCon";

dbCon().then((res) => {
  app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
});
