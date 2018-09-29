const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = (req, res, next) => {
	console.log("USER CONTROLLER")
	console.log(req.body)
	User.find({ email: req.body.email })
		.exec()
		.then(user => {
		if (user.length >= 1) {
			return res.status(409).json({
			message: "Mail exists"
			});
		} else {
			bcrypt.hash(req.body.password, 10, (err, hash) => {
				if (err) {
					return res.status(500).json({
					error: err
					});
				} else {
				const token = jwt.sign(
					{
						email: req.body.email,
						userId: req.body._id,
						hmm: "hmmm!"
					},
						'secret_this_should_be_longer',
					{
						expiresIn: 3600,
					}
						);
				const user = new User({
					_id: new mongoose.Types.ObjectId(),
					email: req.body.email,
					name: req.body.name,
					avatar: req.body.avatar,
					password: hash,
				});
				console.log(hash)
				user
					.save()
					.then(result => {
						console.log(result);
						res.status(201).json({
							_id: user._id,
							token: token,
							message: "User created"
						});
					})
					.catch(err => {
						console.log(err);
						res.status(500).json({
						error: "signup error " + err
						});
					});
				}
			});
		}
    });
};

exports.user_update = (req, res, next) => {
	User.findByIdAndUpdate({ _id: req.body.id })
	.exec()
	.then(user => {
		
		console.log("USER FOUND: ")
		user.set({'name': req.body.name})
		user.set({'email': req.body.email})
		user.save()
		.then(result => {
			res.status(200).send({
				message: "USER UPDATED",
				user: user 
			});
		}).catch(err => {
			res.status(500).json({
				error: err
			})
		})
	});
};

exports.user_updateav = (req, res, next) => {
	User.findByIdAndUpdate({ _id: req.body._id })
	.exec()
	.then(user => {
		console.log("USER FOUND: ")
		user.set({'avatar': req.body.avatar})
		user.save()
		.then(result => {
			res.status(200).send({
				message: "USER AVATAR UPDATED",
				user: user 
			});
		}).catch(err => {
			res.status(500).json({
				error: err
			})
		})
	});
};

exports.user_login = (req, res, next) => {
	let id = "";
	let token = "";
	let fetchedUser = {};
	User.find({ email: req.body.email })
		.exec()
		.then(user => {
		
		if (user.length < 1) {
			return res.status(401).json({
			message: "Auth failed, muchacho"
			});
		}
		bcrypt.compare(req.body.password, user[0].password, (err, result) => {
		if (err) {
			return res.status(401).json({
			message: "Auth failed, hombre"
			});
		}
		if (result) {
			console.log(user[0])
			id = user[0]['_id']
			token = jwt.sign(
			{
				email: user[0].email,
				userId: user[0]._id,
			},
				'secret_this_should_be_longer',
			{
				expiresIn: 3600
			}
			);			
			return res.status(200).json({
				user: user[0],
				token: token,
				
			});
		}
        res.status(401).json({
			message: "Auth failed"
			});
		});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: "this error " + err
      });
	});

	
};

exports.user_refresh_login = (req, res, next) => {
	let refreshedUser = jwt.verify(req.body.usertoken, 'secret_this_should_be_longer');
	console.log("Req.body " + JSON.stringify(req.body.usertoken))
	User.find({ email: refreshedUser.email })
	.exec()
	.then(user => {

		res.status(200).json({
			user: user[0],
		})
		err => {
			res.status(500).json({
				error: err
			})
		};
	});
}

exports.user_stats = (req,res) => {
    const date = Date.now();
    console.log("date " + date)
    let oneHour = 3600000;
    let oneDay = oneHour * 24;
    let oneWeek = oneDay * 7;
    console.log(date - oneHour);

    User.find({createdAt: { $lte: date }}, (err, users) => {
        let userCreated = [];
        users.forEach(el => {
            userCreated.push(el['createdAt'])
        })
        console.trace(users[0]['createdAt'])
        if(err) {
            res.status(500).json({
                error: err
            });
        }
        res.status(200).send({
            users: userCreated
        })
    })
}

exports.user_delete = (req, res, next) => {
	User.remove({ _id: req.params.userId })
		.exec()
		.then(result => {
			res.status(200).json({
				message: "User deleted"
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
}; 