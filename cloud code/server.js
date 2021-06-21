var port = process.env.PORT || 5000;
var express = require('express');
var app = new express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))


app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})

app.get('/', function(request, response){
    response.sendFile('example.html', { root: path.join(__dirname, './pub') });
});