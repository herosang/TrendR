/*function multiply(num1, num2){
	return num1 * num2;
}

print(multiply(20, 4));*/

// db = new Mongo().getDB("test");
// people = null;

// person1 = {
// 	"first_name" : "John",
// 	"last_name" : "Smith",
// 	"age" : 24 
// }

// person2 = {
// 	"first_name" : "Bob",
// 	"last_name" : "Joans",
// 	"age" : 45 
// }


// //db.test.insert(person1);
// //db.test.insert(person2);

// people = db.cities.find();

// while(people.hasNext()){
// 	printjson(people.next());
// 	//db.test.remove(people.next());
// }

//"C:\Users\Jerry Xu.DESKTOP-FT0T9DF\Documents\TrendR\src\node\test_parse.js"
function initDB(db_name, collection_name, file_name){
	db = new Mongo().getDB(db_name);
	
	//Add all data from a json to a string and give it proper form
	var file = cat(file_name);
	file = file.replace(/\n/g, ",").substring(0, file.length - 1);
	file = "[".concat(file, "]");

	var obj = JSON.parse(file);
	db.collection_name.insert(obj);

	list = db.collection_name.find();
	while(list.hasNext()){
		printjson(list.next());
	}

	return db;
}

function emptyDB(db_name, collection_name){
	db = new Mongo().getDB(db_name);
	list = db.collection_name.find();

	while(list.hasNext()){
		db.collection_name.remove(list.next());
	}

	while(list.hasNext()){
		printjson(list.next());
	}
}

//cat() doesn't seem to work for json with more than about 180k lines
//var file = cat("C:\\Users\\Jerry Xu.DESKTOP-FT0T9DF\\Documents\\TrendR\\src\\node\\city.list.json");

//db = initDB("test", "cities", "C:\\Users\\Jerry Xu.DESKTOP-FT0T9DF\\Documents\\test.json");
db = initDB("test", "cities", "test_parse.json");
//emptyDB("test", "cities");


// db = new Mongo().getDB("test");

// //cat() doesn't seem to work for json with more than about 180k lines
// //var file = cat("C:\\Users\\Jerry Xu.DESKTOP-FT0T9DF\\Documents\\TrendR\\src\\node\\city.list.json");
// var file = cat("C:\\Users\\Jerry Xu.DESKTOP-FT0T9DF\\Documents\\test.json");
// file = file.replace(/\n/g, ",").substring(0, file.length - 1);
// file = "[".concat(file, "]");

//printjson(file);

// var obj = JSON.parse(file);
// db.cities.insert(obj);

// citylist = db.cities.find();
// for(i = 0; i < 10; i ++){
// 	if(citylist.hasNext()){
// 		printjson(citylist.next());
// 	}
// 	else{
// 		print(i);
// 	}
// }


// db = new Mongo().getDB("test");
// citylist = db.cities.find();

// while(citylist.hasNext()){
// 	db.cities.remove(citylist.next());
// }

// while(citylist.hasNext()){
// 	printjson(citylist.next());
// }