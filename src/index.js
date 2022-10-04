const express = require('express');
//const route = require("./routes")
const App = express();

App.get('/', (req, res) => {
  res.send('Hola mi server en express');

});
const port = process.env.PORT || 3002;
App.listen(port, () => {
  console.log("Estamos en este puerto" + port)//en el puerto donde se ejecuta
});
