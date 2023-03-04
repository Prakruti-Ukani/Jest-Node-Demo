import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes/index.route.js';
import db from './config/db_config.js';

//setteres
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import router file
app.use('/', routes);

// set port, listen for request
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


