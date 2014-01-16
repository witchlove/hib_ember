HibEmber.House = DS.Model.extend({
        location : DS.attr('string'),
        rooms : DS.attr('string'),
        price : DS.attr('string'),
        rent : DS.attr('string'),
        sell : DS.attr('string'),
        thumbnail : DS.attr('string'),
        images: DS.attr([])
        });

HibEmber.House.FIXTURES =[
    {
        id : 1,
        "location": "Rillaar",
        "rooms": "4",
        "price": 1000,
        "rent" : "Yes",
        "sell" : "Yes",
        "thumbnail" : "/images/thumbnail_1.jpeg",
        "images"  : ["/images/1/img1.png", "/images/1/img2.png" ]
    } ,
    {
        id:2,
        "location": "Aarschot",
        "rooms": "4",
        "price": 5000,
        "rent" : "No",
        "sell" : "Yes",
        "thumbnail" : "/images/thumbnail_2.jpeg",
        "images"  : ["/images/2/img1.png", "/images/2/img2.png" ]
    } ,
    {
        id:3,
        "location": "Scherpenheuvel",
        "rooms": "4",
        "price": 100000,
        "rent" : "No",
        "sell" : "Yes",
        "thumbnail" : "/images/thumbnail_3.jpeg",
        "images"  : ["/images/3/img1.png", "/images/3/img2.png" ]
    }
];
