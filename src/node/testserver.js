var util = require('util'),
    OperationHelper = require('apac').OperationHelper;

var fs = require('fs')
	
var opHelper = new OperationHelper({
    awsId:     'idhere',
    awsSecret: 'secret here',
    assocId:   'trendr02-20',
	locale: 'CA'
});

opHelper.execute('ItemSearch', {
  'SearchIndex': 'All',
  'Keywords': 'Fashion',
  'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
	fs.writeFile('./test.xml', response.responseBody, (err) => {
		if(err) console.log(err);
		console.log("FUCK");
	});
    console.log("Results object: ", response.result);
    console.log("Raw response body: ", response.responseBody);
}).catch((err) => {
    console.error("Something went wrong! ", err);
});