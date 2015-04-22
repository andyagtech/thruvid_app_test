// Physician Messages  //
var speakers = [
    {id: 0, name: "Dr. Piel", pic: "brian_leroux.jpg", title: "Dermatologist", bio: "Make sure you sleep on top of a clean towel each night. Also, update your food diary!"},
    {id: 1, name: "Dr. Brooks", pic: "christophe.jpg", title: "Renologist", bio: "I am afraid that you eat way too much barbecue to be healthy for your kidneys."},
    {id: 2, name: "Dr. Green", pic: "brett.jpg", title: "Herbalist", bio: "Take one of the cookies that you are prescribed."},
    {id: 3, name: "Rajeet Singh", pic: "joe_bowser.jpg", title: "Personal Trainer", bio: "Stretching before sleeping will make you better rested"}
];

// This sends the entire list of physicians //
    // Why is the 'next' included?
exports.findAll = function (req, res, next) {
    res.send(speakers);
};

// This sends a specific physician //
exports.findById = function (req, res, next) {
    var id = req.params.id; // This is passed along via body-parser //
    res.send(speakers[id]);
};