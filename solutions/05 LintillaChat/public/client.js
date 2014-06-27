$(document).ready(function(){
	// WebSocket
	var socket = io.connect();
	// new message
	socket.on('chat', function (data) {
		var time = new Date(data.time);
		$('#content').append(
			$('<li></li>').append(
				// date time
				$('<span>').text('[' +
					(time.getHours() < 10 ? '0' + time.getHours() : time.getHours())
					+ ':' +
					(time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes())
					+ '] '
				),
				// name
				$('<b>').text(typeof(data.name) != 'undefined' ? data.name + ': ' : ''),
				// Text
				$('<span>').text(data.text))
		);
		// scroll down
		$('body').scrollTop($('body')[0].scrollHeight);
	});
	// send message
	function send(){
		// read text boxes
		var name = $('#name').val();
		var text = $('#text').val();
		// emit data to the server
		socket.emit('chat', { name: name, text: text });
		// empty text box
		$('#text').val('');
	}
	// send data when the send button was clicked
	$('#send').click(send);
	// or the enter key was pressed
	$('#text').keypress(function (e) {
		if (e.which == 13) {
			send();
		}
	});
});