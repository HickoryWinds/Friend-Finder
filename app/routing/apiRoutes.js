// import friendsArray
var friendsData = require('../data/friends');

// export function to get and post data from user data input
module.exports = function(app){
    // create get function for api to read only data
    app.get('/api/friends', function(req, res){
        res.json(friendsData)
    })
    // create post function for api to change data
    app.post('/api/friends', function(req, res){
        console.log(req.body);
        friendsData.push(req.body);
        res.json(true);
    })
    // console.log export completed
    console.log('apiRoutes exported');
}