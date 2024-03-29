// import path for proper navigation of folders and files
var path = require('path');
// import express
var express = require('express');

// create export
module.exports = function(app){
    // when /survey in url, create path using server that app is deployed on
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    })
    // set css url
    app.get('/css', function(req, res){
        res.sendFile(path.join(__dirname + '/../css/style.css'));
    })

    //  set default url for server that app is deployed on
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    })
    // console.log that export is working
    console.log('htmlRoutes exported');
}