const newman = require('newman');
 
newman.run({
    collection: require('C:\\Users\\klimam\\Documents\\Postman\\Sample_collection.json'), // can also provide a URL or path to a local JSON file.
    reporters: ['cli','html'],
    reporter: {
        html: {
            export: './htmlResults.html' // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});

var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('C:\\Users\\klimam\\Documents\\Postman\\htmlResults.html', 'utf8');
 
pdf.create(html).toFile('C:\\Users\\klimam\\Documents\\Postman\\reportpdf\\apicollection.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res);
});