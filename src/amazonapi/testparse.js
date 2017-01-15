//System Imports
var fs = require('fs');

//Upload File
var content = fs.readFileSync("test.json");

var json = JSON.parse(content);

var itemList = json.ItemSearchResponse.Items[0].Item;

var titleList = [];

console.log(itemList[0].ItemAttributes[0].Title[0]);

for(var i = 0; i < 10 ;i++){
	titleList.push(itemList[i].ItemAttributes[0].Title[0]);
}

console.log(titleList);