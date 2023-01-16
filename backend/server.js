import express from 'express';
const app = express()
import cors from 'cors';
import { urlencoded, json } from 'body-parser';



app.use(cors());

app.use(urlencoded({ extended: false }))

// parse application/json
app.use(json())

import initializeDatabases from './dbs';
import routes from './routes';

var urlencodedParser = urlencoded({ extended: false })


initializeDatabases().then(dbs => {
  // Initialize the application once database connections are ready.
  routes(app, dbs,urlencodedParser).listen(3000, () => console.log('Listening on port 3000'))
}).catch(err => {
  console.error('Failed to make all database connection!');
  console.error(err)
  process.exit(1)
})