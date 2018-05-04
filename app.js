var bodyParser = require('body-parser'),
express = require('express'),
mongoose = require('mongoose'),
app = express();

// APP SETTINGS
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/restful_blog_app');
app.use(express.static("public"));

// MONGOOSE/MODEL Config
var blogSchema = new mongoose.Schema({
	title: String,
	image: {type: String, default: "https://cdn.pixabay.com/photo/2018/04/28/16/12/blueberry-3357568__480.jpg"},
	body: String,
	created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);


// RESTful routes
app.get("/", function(req, res) {
	res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
	Blog.find({}, function(err, blogs) {
		if(err) {
			console.log(err);
		} else {
			res.render("index", {blogs: blogs});		}
	});
})


app.listen(8000, function() {
	console.log("Blog server is turned on!")
});
