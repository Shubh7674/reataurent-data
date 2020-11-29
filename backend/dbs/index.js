const MongoClient = require('mongodb').MongoClient

// Note: A production application should not expose database credentials in plain text.
// For strategies on handling credentials, visit 12factor: https://12factor.net/config.
const PROD_URI = "mongodb+srv://<usernameProd>:<password>@testcluster.eh5ax.mongodb.net/sample_restaurants?retryWrites=true&w=majority"
// const MKTG_URI = "mongodb+srv://<username>:<password>@testcluster.eh5ax.mongodb.net/sample_restaurants?retryWrites=true&w=majority"

function connect(url) {
  return MongoClient.connect(url).then(client => client.db())
}

module.exports = async function() {
 // let databases = await Promise.all([connect(PROD_URI), connect(MKTG_URI)])
 let databases = await Promise.all([connect(PROD_URI)],{ useUnifiedTopology: true })

  return {
    //production: databases[0],
    // marketing: databases[1]
    marketing: databases[0]
  }
}