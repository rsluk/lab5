// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);
        response.render('index', {
            "parents":[
            {"name":"Friend1",
            "image": "images/http://lorempixel.com/500/500/people",
            "description":"Description here 1"
            },
            {
            "name":"Friend2",
            "image":"images/http://lorempixel.com/500/500/people",
            "description":"Description here 2"
            },
            {
            "name":"Friend3",
            "image":"images/http://lorempixel.com/500/500/people",
            "description":"Description here 3"
            },
            ]
            });
};