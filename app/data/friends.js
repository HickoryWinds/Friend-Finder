// define initial friend for checking
// use bracket notation for scores to correspond with friends that are added via survey
var friendsArray = [
    {
        name: 'Bill Bow Baggins',
        photo: 'https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//N3313/large/7060025_cco_30903_pri_larg.jpg',
        'scores[]': ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
    },
    {
        name: 'Gandalf Not So Great',
        photo: 'https://specials-images.forbesimg.com/imageserve/5d2388f14c687b00085c0f91/416x416.jpg?background=000000&cropX1=0&cropX2=1559&cropY1=130&cropY2=1690',
        'scores[]': ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
    },
    {
        name: 'Frodo Baggins',
        photo: 'https://avatars2.githubusercontent.com/u/8504998?v=3&s=460',
        'scores[]': ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
    }
];

// export friendsArray to be available to other modules
module.exports = friendsArray;