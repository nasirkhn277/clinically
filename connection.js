const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'localhost',
	database : 'clinically',
	user : 'root',
	password : ''
});

connection.connect((error) => {
	if(error){
		throw error;
	} else {
		console.log('Connection set succesfully');
	}
});

module.exports = connection;