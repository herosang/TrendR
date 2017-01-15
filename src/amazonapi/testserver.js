//System Imports
var fs = require('fs');

//Xml to Js.
var parseString = require('xml2js').parseString;

//Amazon Api Middleware
var util = require('util'),
    OperationHelper = require('apac').OperationHelper;
	
var opHelper = new OperationHelper({
    awsId:     'AKIAJJCUJPU5BH53FILQ',
    awsSecret: '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',
    assocId:   'trendr02-20',
	locale: 'CA'
});

opHelper.execute('ItemSearch', {
  'SearchIndex': 'Apparel',
  'Brand': 'Calvin Klein'
}).then((response) => {
  parseString(response.responseBody, (err, data) => {
    fs.writeFile('./test.json', JSON.stringify(data), (err) => {
      if(err) console.log(err);
    });
  });
}).catch((err) => {
    console.error("Something went wrong! ", err);
});