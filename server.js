const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

require("./routes/html-routes.js")(app);
// include api routes

app.listen(PORT, ()=>{
  console.log(`We listenin at PORT: ${PORT}`);
});
