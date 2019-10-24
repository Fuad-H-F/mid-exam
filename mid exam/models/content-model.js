var db = require('./db');

module.exports={

	getById: function(id, callback){

		var sql = "select * from user where id=?";
		db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from member where username=? and password=?";

		db.getResults(sql, [user.username, user.password], function(result){
			if(result.length > 0 ) {
				callback(result[0].type);
			}else{
				callback([]);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from user";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(user, callback){
		var sql = "insert into content values('', ?, ?, ?, ?)";
		db.execute(sql, [user.type,user.name, user.language,user.genre], function(status){
			callback(status);
		});
	},
	update : function(user, callback){
		var sql = "update user set username=?, password=? where id=?";		
			db.execute(sql, [user.username, user.password, user.id], function(status){
				callback(status);
			});
		
	},
	delete : function(user, callback){
		var sql = "DELETE FROM content WHERE name=?;";
		db.execute(sql, [user.name],  function(status){
			callback(status);
		});
	}
}	


