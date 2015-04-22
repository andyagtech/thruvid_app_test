// The Care Info button //
var sessions = [
    {id:0 , title:"Amoxicilin", speaker:"Morning", pic: "viagra.jpg", time:"8:00am",
        room:"Home", twitter_id: "@merck",
        description: "Take this before starting the day"},

    {id:1 , title:"Mucinex", speaker:"Morning", pic: "molly.jpg", time:"10:00am",
        room:"Home", twitter_id:"@devgirlfl",
        description: "Take two after eating breakfast"},

    {id:2 , title:"Viagra", speaker:"Dinner", pic: "viagra.jpg", time:"5:00pm",
        room:"Work", twitter_id:"@mwbrooks",
        description: "Take one with the latest meal in the day."},

    {id:3 , title:"Doxiclin", speaker:"Night", pic: "molly.jpg", time:"10:00pm",
        room:"Home", twitter_id: "@brettrudd",
        description: "Take 1 before sleeping, with water"}
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};
