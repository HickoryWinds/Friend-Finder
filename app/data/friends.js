// define initial friend for checking
// use bracket notation for scores to correspond with friends that are added via survey
var friendsArray = [
    
    // {
    //     name: 'Popeye the Sailor',
    //     photo: 'https://res.cloudinary.com/teepublic/image/private/s--gKXKkJod--/t_Preview/b_rgb:c8e0ec,c_limit,f_jpg,h_630,q_90,w_630/v1481335564/production/designs/928433_1.jpg',
    //     'scores[]': ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
    // },
    // {
    //     name: 'Spy Cat',
    //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wC5_SbsZp2s_n2yuI-xpdpXk1MCR9pLzFApxi3Sin4I41o2p&s',
    //     'scores[]': ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
    // },
    // {
    //     name: 'Homer Simpson',
    //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMm7I9wuLeamOPAib8KpsXSGwowfTt3PXKupH2mGFMNgAZANmWw&s',
    //     'scores[]': ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
    // },{
    //     name: 'Hello Kitty',
    //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEctuI2XEl4_cGvLa0acSRSp0GfKmMq83NyMpuvANGG76ZxSX&s',
    //     'scores[]': ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
    // },
    // {
    //     name: 'Mickey Mouse',
    //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9ykO5v3CgLctufCo3X27aGxrWkwirZN8378zEwqq6Xq0uYgH&s',
    //     'scores[]': ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
    // }
    {
        name: 'Popeye the Sailor',
        photo: '/images/popeye.jpg',
        'scores[]': ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
    },
    {
        name: 'Spy Cat',
        photo: '/images/spy_cat.jpg',
        'scores[]': ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
    },
    {
        name: 'Homer Simpson',
        photo: '/images/homer.jpg',
        'scores[]': ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
    },{
        name: 'Hello Kitty',
        photo: '/images/kitty.jpg',
        'scores[]': ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
    },
    {
        name: 'Mickey Mouse',
        photo: '/images/mickey.png',
        'scores[]': ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
    }
];
// export friendsArray to be available to other modules
module.exports = friendsArray;