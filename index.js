const express = require('express');
const route = require("./routes")
const App = express();

route(App);
const port = process.env.PORT || 3002;
App.listen(port, () => {
  console.log("Estamos en este puerto" + port)//en el puerto donde se ejecuta
});
