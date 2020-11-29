const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')



app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const initializeDatabases = require('./dbs')
const routes = require('./routes')

var urlencodedParser = bodyParser.urlencoded({ extended: false })


initializeDatabases().then(dbs => {
  // Initialize the application once database connections are ready.
  routes(app, dbs,urlencodedParser).listen(3000, () => console.log('Listening on port 3000'))
}).catch(err => {
  console.error('Failed to make all database connections!');
  console.error(err)
  process.exit(1)
})