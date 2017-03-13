var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')

var app = express();
var port = (process.env.PORT || 7000);
mongoose.connect('mongodb://fareed:fareed@ds151909.mlab.com:51909/react-chalenge');
mongoose.connection.on('connected', function () {
    console.log('Db is connected')
})

app.use(bodyparser.json())

var clientSchema = new mongoose.Schema({
    name: String,
    Address: String
});

var clientModal = mongoose.model('client', clientSchema)

app.post('/add', function (req, res, next) {

    var newClient = new clientModal({

        name: req.body.name,
        Address: req.body.Address,
    })
    clientModal.save(function (err, data) {
        if (!err) {
            res.send('data saved')

        }
        else {
            res.send('data is not saved', err)
            console.log('data is saved')
        }
    })
})

app.get("/", function (req, res, next) {
    console.log("request is comming to '/' ");

     clientModal.find({name:'agha',Address:'rafi garden!'}, function (err, data) {
        if (!err) {
    res.send('data saved'+data)
         }
         else {
             res.send('data is not saved' + err)
        }
     })
})
app.listen(port, function () {
    console.log('app is running on port', port);
})



