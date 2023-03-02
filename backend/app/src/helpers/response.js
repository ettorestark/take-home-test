exports.sendData = function(res, message, data) {
	return res.status(200).send({
		success: true,
		message: message,
		data: data
	});
};

exports.NotFound = function(res) {
	return res.status(400).send({
		success: false,
		message: 'Error 404 Not Found'
	});
};

exports.sendError = function(res) {
	return res.status(500).send({
		success: false,
		message: 'An error has ocurred'
	});
};

exports.setHeadersForCORS = function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-Access-Token, Content-Type, Accept");
	next();
}