var fs = require('fs');
var path = require('path');

var getPeopleFileText = function () {
    var filePath = path.join(__dirname, 'peopleData.json');
    return fs.readFileSync('peopleData.json','utf8');
    /*fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            return data;
        } else {
            console.log(err);
        }
    });
    return '';*/
};

exports.getPeople = function (count) {
    var fileText = getPeopleFileText();
    var people = JSON.parse(fileText).people;
    if (people.length > count) {
        return people.slice(0, count);
    }
    return people;
}