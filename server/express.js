// code modified from https://gist.github.com/toddbluhm/5972922
var express = require('express');
//var forward = require('./expressForward');  //reverse proxy
//var nano = require('connect-nano');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();

//serve static assets from the projects build directory, which is really the webroot for this project.
app.use(express.static(path.join(__dirname, './../build'))); //
app.use(cookieParser());
//app.use(nano('http://forward.to-me.com'));
// the line below looks for any urls with /db in them as possible candidates that need to be forwarded to another server
// Example: localhost/db/someService/123 will be forwarded to https://<url-defined-above>/someService/123
// thus the /db is just a key to let us know a url needs to be forwarded, then the /db is removed from the url
// before forwarding. Naturally, you can change db to something else
//app.use(forward(/\/db\/(.*)/));
app.listen(80);
console.log('Listening on port 80');