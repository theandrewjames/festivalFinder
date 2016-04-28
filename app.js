var express = require("express");
var app = express();
var jsonParser = require("body-parser").json();

app.use(express.static("./"))
var festivals = [
  {
    name: "Holy Ship!",
    venue: "Norwegian Epic",
    city: "Miami",
    state: "FL",
    website: "holyship.com",
    month: "Feb",
    dates: "10-13",
    day: "Wed",
    year: 2016,
    ga: "$574",
    vip: "",
    image: "images/holyship.jpg",
    lineup: "images/holyshipLineup.jpg",
    reviews: [["Philip Boateng", "Looking at the pictures, this festival got me thinking about the beautiful creatures in this world. It is indeed a great festival of the World and might be the best festival in the world. I would be very grateful to witness this festival in my life time to cheer my life.", "11/25/2015"]],
    dataId: 0
  },
  {
    name: "Ultra Miami",
    venue: "Bayfront Park",
    city: "Miami",
    state: "FL",
    website: "ultramusicfestival.com",
    month: "Feb",
    dates: "18-20",
    day: "Thu",
    year: 2016,
    ga: "$250",
    vip: "$1200",
    image: "images/ultraMiami.jpg",
    lineup: "images/ultramiamiLineup.jpg",
    reviews: [["Sonny J", "Ultra was fun, very great experience, I think everyone should at least get to experience it at least once in their life time. My friends and I had a blast but unfortunately did not attend the the third day so I sold my last day ticket.. I had a blast thought the first two days. If your into the whole trance and EDM vibes then this is a must go.. It was super packed but thats what makes it unique and also the DJ's were awesome..", "2/12/2016"]],
    dataId: 1
  },
  {
    name: "Buku",
    venue: "1400 New Orleans Place",
    city: "New Orleans",
    state: "LA",
    website: "thebukuproject.com",
    month: "Mar",
    dates: "11-12",
    day: "Fri",
    year: 2016,
    ga: "$150",
    vip: "$300",
    image: "images/buku.png",
    lineup: "images/bukuLineup.png",
    reviews: [["The Festival Guy", " I am going to give Buku Music And Arts festival a healthy 4 out of 5 stars. It was an absolute blast to attend. To get five stars, they simply needs to give us places to sit, add more art installations (interactive art would be best), create a program to reward the crowd for cleaning up, and go the extra mile in decoration. I also encourage them to go for a full three day festival, because two days was just not enough.", "03/18/2014"]],
    dataId: 2
  },
  {
    name: "CRSSD",
    venue: "Waterfront Park",
    city: "San Diego",
    state: "CA",
    website: "crssdfest.com",
    month: "Mar",
    dates: "5-6",
    day: "Sat",
    year: 2016,
    ga: "$145",
    vip: "",
    image: "images/crssd.png",
    lineup: "images/crssdLIneup.jpg",
    reviews: [["Chip Conley", "A music festival in March? Sounds like Ultra in Miami. Yes, that's quite a standard for CRSSD to live up to, but for those on the west coast who want to start their festival season in style, this new San Diego fest is a good way to initiate your party year. With a very experienced producer and a little older crowd than your typical EDM rave, CRSSD has a very specific idea of where it's going. Any festival on a waterfront park in California gets my attention plus this urban location means it's easy to get to plus there are the fascinations of the local haunts to entertain you. This does mean CRSSD's energy as a festival can be a little less combustible (since it's not an island you can't escape as is the case with Burning Man and many other festivals), but for those looking for a laid-back music weekend that's 'easy peasy', this is your ticket.", "1/14/2016"]],
    dataId: 3
  },



  {
    name: "Okeechobee",
    venue: "Sunshine Grove",
    city: "Okeechobee",
    state: "FL",
    website: "okeechobeefest.com",
    month: "Mar",
    dates: "4-6",
    day: "Fri",
    year: 2016,
    ga: "$280",
    vip: "$599",
    image: "images/okeechobee.jpg",
    lineup: "images/okeechobeeLineup.jpg",
    reviews: [],
    dataId: 4
  },



  {
    name: "Further Future",
    venue: "Moapa River Reservation",
    city: "Las Vegas",
    state: "NV",
    website: "furtherfuture.com",
    month: "Apr",
    dates: "29-1",
    day: "Fri",
    year: 2016,
    ga: "$350",
    vip: "",
    image: "images/further.png",
    lineup: "images/furtherLineup.jpg",
    reviews: [["Chip Conley", "FF has deep meaning for me as my co-founder of Fest300 Art Gimbel died in a car crash driving to the festival. So, while I didn't make the southern Nevada trek in 2015, I know I will some day as an homage to Art and to art since the Robot Heart team have a special appreciation for art in the desert. This is sort of like Burning Man graduate school, for those who want to go deeper with other fashion-minded burners and, frankly, especially for the cool kid crowd (with a little extra dough). If you've done Burning Man a half-dozen times and want to start your festival season with a little deja vu in the southern part of the same state, maybe I'll see you at a future Further Future.", "1/12/2016"]],
    dataId: 5
  },



  {
    name: "Dreamscape",
    venue: "Camp Ramblewood",
    city: "Darlington",
    state: "MD",
    website: "dreamscapefestival.com",
    month: "May",
    dates: "5-8",
    day: "Thur",
    year: 2016,
    ga: "$145",
    vip: "$215",
    image: "images/dreamscape.png",
    lineup: "images/dreamscapeLineup.jpg",
    reviews: [],
    dataId: 6
  },
  {
    name: "Hangout Festival",
    venue: "Gulf Shores",
    city: "Gulf Shores",
    state: "AL",
    website: "hangoutmusicfest.com",
    month: "May",
    dates: "20-22",
    day: "Fri",
    year: 2016,
    ga: "$289",
    vip: "$1099",
    image: "images/hangout.jpg",
    lineup: "images/hangoutLineup.jpg",
    reviews: [],
    dataId: 7
  },
  {
    name: "Summer Camp",
    venue: "Three Sisters Park",
    city: "Chillicothe",
    state: "IL",
    website: "summercampfestival.com",
    month: "May",
    dates: "27-29",
    day: "Fri",
    year: 2016,
    ga: "$214.50",
    vip: "$225",
    image: "images/summercamp.png",
    lineup: "images/summercampLineup.jpg",
    reviews: [],
    dataId: 8
  },
  {
    name: "Sunset Music Festival",
    venue: "Raymond James Stadium",
    city: "Tampa",
    state: "FL",
    website: "smftampa.com",
    month: "May",
    dates: "28-29",
    day: "Sat",
    year: 2016,
    ga: "$169",
    vip: "$244",
    image: "images/sunset.png",
    lineup: "images/sunsetLineup.png",
    reviews: [],
    dataId: 9
  },
  {
    name: "Lightning in a Bottle",
    venue: "San Antonio Recreation Area",
    city: "Bradley",
    state: "CA",
    website: "lightninginabottle.org",
    month: "May",
    dates: "25-30",
    day: "Wed",
    year: 2016,
    ga: "$215",
    vip: "",
    image: "images/lightning.jpg",
    lineup: "images/lightningLineup.jpg",
    reviews: [],
    dataId: 10
  },
  {
    name: "Bonnaroo",
    venue: "Great Stage Park",
    city: "Manchester",
    state: "TN",
    website: "bonnaroo.com",
    month: "Jun",
    dates: "9-12",
    day: "Thurs",
    year: 2016,
    ga: "$324",
    vip: "$800",
    image: "images/bonnaroo.jpg",
    lineup: "images/bonnarooLineup.jpg",
    reviews: [],
    dataId: 11
  },
  {
    name: "EDC Las Vegas",
    venue: "Las Vegas Motor Speedway",
    city: "Las Vegas",
    state: "NV",
    website: "lasvegas.electricdaisycarnival.com",
    month: "Jun",
    dates: "17-19",
    day: "Fri",
    year: 2016,
    ga: "$335",
    vip: "$700",
    image: "images/edclv.jpg",
    lineup: "",
    reviews: [],
    dataId: 12
  }
];


app.post("/sort", jsonParser, function(req, res) {
  var matched = [];
  for(var i = 0;i < festivals.length;i++) {
    if(req.body.state == festivals[i].state.toLowerCase() && req.body.month == festivals[i].month.toLowerCase()) {
      matched.push(festivals[i])
    }
    else if(req.body.state == "any" && req.body.month == festivals[i].month.toLowerCase()) {
      matched.push(festivals[i])
    }
    else if(req.body.state == festivals[i].state.toLowerCase() && req.body.month == "any") {
      matched.push(festivals[i])
    }
    else if(req.body.state == "any" && req.body.month == "any") {
      matched.push(festivals[i])
    }
  }
  if(matched.length > 0) {
    res.send(matched);
  } else {
    res.sendStatus(404)
  }
})

app.get("/view", function(req, res) {
  var matched = [];
  for(var i = 0;i < festivals.length;i++) {
    if(req.query.q == festivals[i].dataId) {
      matched.push(festivals[i])
    }
  }
  if(matched.length > 0) {
    res.send(matched)
  }
  else {res.sendStatus(404)}
})

app.post("/addReview", jsonParser, function(req, res) {
  var matched = [];
  for(var i = 0;i < festivals.length;i++) {
    if(req.body.festivalId == festivals[i].dataId) {
      festivals[i].reviews.unshift([req.body.name, req.body.review, req.body.date]);
      matched.push(festivals[i].reviews)
    }
  }
  if(matched.length > 0) {
    res.send(matched)
  } else {
    res.sendStatus(404)
  }
})
var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("Listening on port " + port);
})

module.exports = app;
