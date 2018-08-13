const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/posts", (req,res,next) => {
    const post = req.body;
    console.log("MOVE POSTED TO SERVER: " + post)
    res.status(201).json({
        message: 'Post Added!'
    });
});
app.use((req,res,next) => {
    res.sendFile(Path.join())
})

// app.get('/api/posts',(req, res, next) => {
//     const posts = [
//         { id: 'sdfsarr', title: 'first post', content: 'information goes here'} 
//     ]
//     res.status(200).json({
//         message: 'Posts fetched',
//         posts: posts
//     });
// });



module.exports = app;