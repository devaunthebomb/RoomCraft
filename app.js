var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.get('/items', function(req,res){
    console.log("get request to items made");
    res.sendFile('mockitems.json',{ root: './mocks'})
})

app.get('/projects', function(req,res){
    console.log("get request for projects made succssefully");
    res.sendFile('mockprojects.json',{ root: './mocks'})
})
app.listen(process.env.PORT || 8080);

