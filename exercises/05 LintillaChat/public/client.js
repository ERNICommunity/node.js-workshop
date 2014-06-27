$(document).ready(function(){
	// WebSocket
	var socket = io.connect();
	// new message
	
	// todo: listen to the 'chat' event which receives the data object from the server
	// and append it to the #content id
	
	// the data format to be appended is as follows
	// $('<li></li>').append(
		// // date time
		// $('<span>').text('[' +
			// (time.getHours() < 10 ? '0' + time.getHours() : time.getHours())
			// + ':' +
			// (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes())
			// + '] '
		// ),
		// // name
		// $('<b>').text(typeof(data.name) != 'undefined' ? data.name + ': ' : ''),
		// // Text
		// $('<span>').text(data.text))

	
		// scroll down
		$('body').scrollTop($('body')[0].scrollHeight);
	});
	
	// write a "send()" function that is called when the send button was clicked or the enter key was pressed
	// and sends the content from the 
	// text boxes #name and #text to the server
	// to read the text boxes:
	// var name = $('#name').val();
	// var text = $('#text').val();
	// to empty the text box after the message was sent
	// $('#text').val('');
	
	
	// send data when the send button was clicked
	$('#send').click(send);
	// or the enter key was pressed
	$('#text').keypress(function (e) {
		if (e.which == 13) {
			send();
		}
	});
});