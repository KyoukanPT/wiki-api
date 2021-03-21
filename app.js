const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("We´re connected to the database!");
});

const wikiSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", wikiSchema);

/*************************************************************** ALL ARTICLES **************************************************************************/
app.route("/articles")
    .get((req, res) => {
        Article.find((err, foundArticles) => {
            if(err) console.error(err);
            res.send(foundArticles);
        });
    })
    .post((req, res) => {
        const newArticle = new Article ({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save((err) => {
            if(err) console.error(err);
            res.send("Successfully added a new article!");
        });
    })
    .delete((req, res) => {
        Article.deleteMany((err) => {
            if(err) console.error(err);
            res.send("Successfully deleted all articles!");
        });
    });

/***************************************************************** SPECIFIC ARTICLE ********************************************************************/ 
app.route("/articles/:articleTitle")
    .get((req, res) => {
        Article.findOne({title: req.params.articleTitle}, (err, foundArticle) => {
            if(err) console.error(err);
            res.send(foundArticle);
        });
    })
    .put((req, res) => {
        Article.replaceOne({title: req.params.articleTitle}, {title: req.body.title, content: req.body.content}, (err) => {
            if(err) console.error(err);
            res.send("Successfully replaced the selected article");
        })
    })
    .patch((req, res) => {
        Article.updateOne({title: req.params.articleTitle}, {title: req.body.title, content: req.body.content}, {omitUndefined: true}, (err) => {
            if(err) console.error(err);
            res.send("Successfully updated the selected article");
        })
    })
    .delete((req, res) => {
        Article.deleteOne({title: req.params.articleTitle}, (err, deletedArticle) => {
            if(err) console.error(err);
            res.send("Succcesfully removed the selected article");
        })
    });
/*******************************************************************************************************************************************************/

app.listen(3000, () => {
    console.log("Server is up and running!");
});
