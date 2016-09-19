var fs = require('fs');
var path = require('path');
var fileHelper = require('./fileHelper.js');

exports.getPeople = function (count, callback) {
    var filePath = path.join(__dirname, 'peopleData.json');
    fileHelper.readJson(filePath, function (err, json) {
        if (err) {
            return callback(err);
        }
        var people = json.people;
        if (people.length > count) {
            people = people.slice(0, count);
        }
        return callback(null, people);
    });
}