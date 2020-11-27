//WadowiceAPI by Antonio0806
//Dobra rzecz
//Nie kraść. Copyright Antonio0806 2020c
var express = require('express');
var app = express();
var fs = require("fs");
var port = process.env.port || 2137;

//papiez info
app.get('/api/papiez', function (req, res) {
   fs.readFile( __dirname + "/" + "barka.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
//barka
app.get('/api/barka', function (req, res) {
   fs.readFile( __dirname + "/" + "papiez_info.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
//kremówka
app.get('/api/kremowka', function (req, res) {
   fs.readFile( __dirname + "/" + "papiez_info.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
//BAZY DANYCH\\
//bazy danych
fs.readFile('./database.json', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {

     
        const databases = JSON.parse(data);

       
        databases.forEach(db => {
            console.log(`${db.name}: ${db.type}`);
        });
//czytanie//
		app.get('/api/read', function (req, res) {
		databases.forEach(db => {
            console.log(`${db.name}: ${db.type}`);
        });
	})
//czytanie//
    }

});

//serwerek//
app.listen(port, function () {
    var datetime = new Date();
    var message = "Server runnning on Port:- " + port + "Started at :- " + datetime;
    console.log(message);
});
//serwerek//
