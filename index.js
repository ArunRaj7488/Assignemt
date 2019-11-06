const express=require('express');
const app=express();

require('./startup/db');
require('./startup/routes')(app);

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`running at port ${port}`));
