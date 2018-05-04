var bodyParser = require('body-parser'),
express = require('express'),
mongoose = require('mongoose'),
app = express();

// INITIALIZATION
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



app.listen(8000, function() {
	console.log("Blog server is turned on!")
});
