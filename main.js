var pbkdf2_hmac = require('pbkdf2-sha512');

document.getElementById('c').onclick = function() {
	var password = document.getElementById('a').value;
	var salt = document.getElementById('b').value;
	var iterations = 314159;
	var key = pbkdf2_hmac(password, salt, iterations, 32);
	var result_field = document.getElementById('d');
	result_field.innerHTML = key.toString('hex')
}
