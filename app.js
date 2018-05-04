var bodyParser = require('body-parser'),
express = require('express'),
mongoose = require('mongoose'),
app = express();

// SETTINGS
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL Config
var blogSchema = new mongoose.Schema({
	title: String,
	image: {type: String, default: "https://cdn.pixabay.com/photo/2018/04/28/16/12/blueberry-3357568__480.jpg"},
	body: String,
	created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);


app.listen(8000, function() {
	console.log("Blog server is turned on!")
});
