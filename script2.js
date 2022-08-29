const newman = require('newman');
var fs = require('fs');
var request = require('request');
request('https://api.getpostman.com/collections/542b7ed5-d56b-4f01-8453-1c12a3530da7?apikey=PMAK-630c8462f1ab38031f598331-39b0ace64fc05e585c42548ea9075b5431',function(error,response,body){
    if(!error && response.statusCode==200){
        var collection_json =  body;
        fs.writeFile('C:\\Users\\klimam\\Documents\\Postman\\new_collection.json',collection_json,(err)=>{
            if (err) { throw err; }
            console.log('collection run complete!');
            newman.run({
                collection: require('C:\\Users\\klimam\\Documents\\Postman\\new_collection.json'), // can also provide a URL or path to a local JSON file.
                reporters: ['html','cli'],
                reporter: {
                    html: {
                        export: './htmlResults.html' // If not specified, the file will be written to `newman/` in the current working directory.
                    }
                }
            }, function (err) {
                if (err) { throw err; }
                var pdf = require('html-pdf');
                var html = fs.readFileSync('C:\\Users\\klimam\\Documents\\Postman\\htmlResults.html', 'utf8');   
                pdf.create(html).toFile('C:\\Users\\klimam\\Documents\\Postman\\reportpdf\\apicollection2.pdf', function(err, res) {
                if (err) return console.log(err);
                console.log(res);
                });
            });
        });
    }
})