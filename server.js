const express = require('express');
const mongoose = require('mongoose');
// add paths dependency
const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sweat-it-db', { useNewUrlParser : true });

require("./routes/html-routes.js")(app);
// include api routes

app.listen(PORT, ()=>{
  console.log(`Connected at PORT: ${PORT}`);
});
