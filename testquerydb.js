var fs = require('fs'),
    LinvoDB = require('linvodb3');

LinvoDB.dbPath = process.cwd();
var BioBricks = new LinvoDB("biobricks", { });

console.log('starting');
// BioBricks.find({}, function (err, docs) {
//     console.log('total docs', docs.length);
// });

// BioBricks.find({ 'sample_status': 'In stock' }, function (err, docs) {
//     console.log('in stock', docs.length);
// });

BioBricks.find({ 'short_name': 'A340620' }, function (err, docs) {
    console.log('A340620', docs);
});

