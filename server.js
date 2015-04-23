// This is for Express (the library + middleware) //
var express        = require('express'),          //
    bodyParser     = require('body-parser'),      // For parsing forms and data passed in HTTP requests //
    methodOverride = require('method-override');  // overwrite HTTP verb methods //

// This is for importing the data used in the app //
var sessions = require('./routes/sessions'),
    speakers = require('./routes/speakers');

// Initialize the app //
var app = express();

// app.use() is how we hook up middleware //
// If you don't give it a path, it executes on every request //
app.use(bodyParser());              // Pull information from html in POST
app.use(methodOverride());          // Simulate DELETE and PUT - Why?
app.use(express.static('static'));  // This is for serving file in the 'static' directory

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests //
    // app.all attaches to ALL of the HTTP verbs (http://expressjs.com/api.html#app.all)
    // So it executes whenever we make any sort of request
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// findAll and findById are functions defined in those modules //
// They are NOT array functions
app.get('/sessions', sessions.findAll);
app.get('/sessions/:id', sessions.findById);

// This provides a route for all AND individual speakers //
app.get('/speakers', speakers.findAll);
app.get('/speakers/:id', speakers.findById);

// Choosing the port //
app.set('port', process.env.PORT || 8080);

// This is the output on the console //
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
