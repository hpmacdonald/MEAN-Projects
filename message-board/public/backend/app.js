const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/post");
const mongoose = require("mongoose");
const app = express();
mongoose.connect('mongodb://localhost/posts_db')
    .then(() => {
        console.log("Connected to database!");
    })
    .catch (() => {
        console.log("Connection failed");
    })
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", 
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        console.log(createdPost);
        console.log("this has worked");
        res.status(201).json({
            message: "post added!",
            postId: createdPost._id
        });
    });
});

app.put("/api/posts/:id", (req, res, next) => {
    const post = new Post({
        _id: req.body.id,
        title: req.body.title,
        content: req.body.content
    })
    Post.updateOne({ _id: req.params.id }, post).then(result => {
        console.log(result);
        res.status(200).json({ message: "Update successful!" });
    });
});

app.get("/api/posts", (req, res, next) => {
    Post.find().then(allPosts => {
        res.status(200).json({
            message: "Post fetched successfully!",
            posts: allPosts
        });
    });
});

app.get("/api/posts/:id", (req, res, next) => {
    Post.findById(req.params.id).then(post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({message: "Post not found!"});
        }
    });
});

app.delete("/api/posts/:id", (req, res, next) => {
    Post.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
    })
    console.log(req.params.id);
    res.status(200).json({ message: "post deleted!" });
});

module.exports = app;
