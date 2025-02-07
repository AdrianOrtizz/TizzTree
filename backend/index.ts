import app from "./src/server";
import dbCon from "./src/config/dbCon";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

dbCon().then((res) => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});
