const app = require("./app");
const debug = require("debug")("node-vue");
const http = require("http");
const socket = require("socket.io");


//Server opens port and sockets

const normalizePort = val => {
	var port = parseInt(val, 10);


	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
};

const onError = error => {
	if (error.syscall !== "listen") {
		throw error;
	}
	const bind = typeof port === "string" ? "pipe " + port : "port " + port;
	switch (error.code) {
		case "EACCES":
		console.error(bind + " requires elevated privileges");
		process.exit(1);
		break;
		case "EADDRINUSE":
		console.error(bind + " is already in use");
		process.exit(1);
		break;
		default:
		throw error;
	}
};

const onListening = () => {

	const bind = typeof port === "string" ? "pipe " + port : "port " + port;
	debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
const io = socket(server);
let onlineUsers = [];

io.on("connection", (socket) => {
	let room = "";
	console.log('made socket connection', socket.id);

	socket.on('joinroom', (data) => {
		room = data;
	});

	socket.on('chat', (data) => {
		socket.join(room)
		console.log("JOINING ROOM " + room)
		io.sockets.in(room).emit('chat', data)
	});

	socket.on('challenge', (data) => {
		console.log("challenge data " + JSON.stringify(data))
		io.sockets.emit('challenge',data)
	});

	socket.on('login', (data) => {
		let unique = true;
		onlineUsers.forEach(function(user) {
			if(user['email'] === data['email']) {
				unique = false;
			}
		})
		if (unique) {
			onlineUsers.push(data)
		}
    io.sockets.emit('login', onlineUsers);
    console.log("EMITTING users")
	});

    socket.on('gamedata', (data) => {
        socket.join(room)
        if(data !== 'open') {
			console.log("GAME ID" + data._id );
			io.sockets.in(room).emit('gamedata', data);
			console.log("EMITTING")
        }
    });
}); 
