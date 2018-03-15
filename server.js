'use strict';

const express = require('express');
const multer  = require('multer');

const port = process.env.PORT || 8080;

const website = process.cwd() + '/public';

var app = express();
var upload = multer({ dest: 'uploads/' });

//app.use(express.static(website));

app.use(express.static(process.cwd() + '/views'));
app.use('/public', express.static(process.cwd() + '/public'));

app.post("/upload", upload.single('pathname'), (request, response) => {
  console.log("/upload -> " + request.file.originalname);

//  response.writeHead(200, 'Content-Type/', "application/json");

  var metadata = {
      "file": request.file.originalname,
      "size": request.file.size
  };

//  response.json(JSON.stringify(metadata));
  response.json(metadata);
});

app.set('json spaces', 2);

app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
