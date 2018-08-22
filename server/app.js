const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const profileRoutes = require('./routes/profile');
const userRoutes = require('./routes/user');
const newGameRoutes = require('./routes/newGame');


const Message = require('./models/message');

const app = express();

mongoose.connect("mongodb+srv://jncam:Ui2KnTGHwYlvjrWN@cluster0-bxxsv.mongodb.net/test?retryWrites=true")
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('DB connection failed.')
    })


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use("/", express.static(path.join(__dirname, "dist")));


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

app.use('/profile', profileRoutes);
app.use("/user", userRoutes);
app.use("/newgame", newGameRoutes);

app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
  });

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
     console.log(res)
});

app.post("/api/send", (req,res,next) => {
    const message = new Message({
        title: req.body.title,
        content: req.body.content
    });
    message.save();
    res.status(201).json({
        message: 'Post Added! ' + message
    });
});
// app.use((req,res,next) => {
//     res.sendFile(path.join(__dirname, "dist","index.html"))
// });

// app.get("/api/receive",(req, res, next) => {
//     Message.find().then(documents => {
//         res.send({
//             message: "Thanks",
//             got: documents
//         });
//     });
// });


module.exports = app;