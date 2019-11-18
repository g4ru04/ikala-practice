'use strict';

var util = require('util');

module.exports = {
  role: role
};
/* impl of /api/v1/role*/
function role(req, res) {
	
	res.header("Access-Control-Allow-Origin", "http://192.168.99.100:3002");
	var role;
	if(
		req.headers &&
		req.headers.origin=="http://192.168.99.100:3002"
	){
		role = fetch_data(true);
		res.json(role);
		
	}else{
		res.status(403).send({ code:403 , message: 'Access forbidden.' });
		
	}
	
}
function fetch_data(){
	return [{
		"id":1,
		"name":"Admin"
	},{
		"id":2,
		"name":"Moderater"
	},{
		"id":3,
		"name":"Viewer"
	}];
}
