var io = require('socket.io').listen(88),
    users = [];

io.sockets.on('connection', function (s)
{
	s.broadcast.emit('user connected'); // To everyone else
	
	s.on('disconnect', function ()
	{
        io.sockets.emit('user disconnected');
    });
});
