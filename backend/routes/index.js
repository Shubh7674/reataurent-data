


module.exports = function(app, dbs) {

    app.get('/production', (req, res,urlencodedParser) => {
      dbs.production.collection('restaurants').find({}).limit(100).toArray((err, docs) => {
        if (err) {
          console.log(err)
          res.error(err)
        } else {
          res.json(docs)
        }
      })
    })
  
    app.get('/marketing', (req, res,urlencodedParser) => {
      dbs.marketing.collection('restaurants').find({}).limit(100).toArray((err, docs) => {
        if (err) {
          console.log(err)
          res.error(err)
        } else {
          res.json(docs)
        }
      })
    });

    app.post('/submit',(req, res,urlencodedParser) => {
     console.log(req.body);
      var restaurent={
        address:{
          building:req.body.building,
          street:req.body.street,
          coord:[-73.98241999999999,40.579505],
          zipcode:req.body.zipcode
        },
        grades:{
          date:new Date(),
          grade:'A',
          score:8
        },
        borough:req.body.borough,
        cuisine:req.body.cuisine,
        name:req.body.name,
        restaurant_id:45700896
      }

      dbs.marketing.collection('restaurants').insertOne(restaurent, function(err, res) {
        if (err) console.log(err.Message);;
        console.log("1 message inserted");
        
    });

     
  });
  
    return app
  }