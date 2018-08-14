const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).send({
        message: "Handling GET requests to /profile"
    });
});

router.post('/profile', (req,res,next) => {
    res.status(200).json({
        message: "Handling POST requests to /profile"
    });
});

module.exports = router;