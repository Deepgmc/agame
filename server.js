var express = require('express'),
    app = express(),
    app_port = 80;

app.use(express.static('public'));

app.listen(app_port, function(){
  console.log('Listening port ' + app_port);
});
