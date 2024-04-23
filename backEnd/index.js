const express = require('express');
const app = express();
const port_number = 9000;


app.use(express.json());


const prisonerRoutes = require('./routes/prisonerRoutes');
const guardRoutes = require('./routes/guardRoutes');


app.use('/p', prisonerRoutes);


app.use('/g', guardRoutes);


app.listen(port_number, () => {
    console.log(`Server is running on http://localhost:${port_number}`);
});
