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

//mongo "C:\Users\Jerry Xu.DESKTOP-FT0T9DF\Documents\TrendR\src\node\test_parse.js"
function addCollection(db, collection_name, file_name){
	print(file_name);

	//Add all data from a json to a string and give it proper form
	var file = cat(file_name);
	//var file = cat("test_parse.json");
	file = file.replace(/\n/g, ",").substring(0, file.length - 1);
	file = "[".concat(file, "]");

	//Parse json string and insert objects into database
	var obj = JSON.parse(file);
	db.collection_name.insert(obj);

	list = db.collection_name.find();
	while(list.hasNext()){
		printjson(list.next());
	}
}

function removeCollection(db, collection_name){
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

db = new Mongo().getDB("test");
addCollection(db, "cities", "C:\\Users\\Jerry Xu.DESKTOP-FT0T9DF\\Documents\\TrendR\\src\\node\\test_parse.json");
// addCollection(db, "cities", "../test_parse.json");
//removeCollection(db, "cities");