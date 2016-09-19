var fs = require('fs');

exports.readJson = function (filePath, callback) {  
  fs.readFile(filePath, function(err, data) {
    var parsedJson;

    // Handle error
    if (err) {
       return callback(err);
    }

    // Parse JSON
    try {
      parsedJson = JSON.parse(data);
    } catch (exception) {
      return callback(exception);
    }

    // Everything is ok
    return callback(null, parsedJson);
  });
};

