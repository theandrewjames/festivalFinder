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
    year: 2016,
    GA: "$574+",
    image: "images/holyship.jpg",
    lineup: "images/holyshipLineup.png",
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
    year: 2016,
    GA: "$250",
    VIP: "$1200",
    image: "images/ultraMiami.jpg",
    lineup: "images/ultramiamiLineup.jpg",
    dataId: 1
  },
  {
    name: "Buku",
    venue: "1400 Port of New Orleans Place",
    city: "New Orleans",
    state: "LA",
    website: "thebukuproject.com",
    month: "Mar",
    dates: "11-12",
    year: 2016,
    GA: "$150",
    VIP: "$300",
    image: "images/buku.png",
    lineup: "images/bukuLineup.png",
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
    year: 2016,
    GA: "$145",
    VIP: "",
    image: "images/crssd.png",
    lineup: "images/crssdLIneup.jpg",
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
    year: 2016,
    GA: "$280",
    VIP: "$599",
    image: "images/okeechobee.jpg",
    lineup: "images/okeechobeeLineup.jpg",
    dataId: 4
  },
  {
    name: "Further Future",
    venue: "Moapa River Reservation",
    city: "Las Vegas",
    state: "NV",
    website: "furtherfuture.com",
    month: "Apr",
    dates: "29-May 1",
    year: 2016,
    GA: "$350",
    VIP: "",
    image: "images/further.png",
    lineup: "images/furtherLineup.jpg",
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
    year: 2016,
    GA: "$145",
    VIP: "$215",
    image: "images/dreamscape.png",
    lineup: "images/dreamscapeLineup.jpg",
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
    year: 2016,
    GA: "$289",
    VIP: "$1099",
    image: "images/hangoutjpg",
    lineup: "images/hangoutLineup.jpg",
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
    year: 2016,
    GA: "$214.50",
    VIP: "$225",
    image: "images/summercamp.png",
    lineup: "images/summercampLineup.jpg",
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
    year: 2016,
    GA: "$169",
    VIP: "$244",
    image: "images/sunset.png",
    lineup: "images/sunsetLineup.png",
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
    year: 2016,
    GA: "$215",
    VIP: "",
    image: "images/lightning.jpg",
    lineup: "images/lightningLineup.jpg",
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
    year: 2016,
    GA: "$324",
    VIP: "$800",
    image: "images/bonnaroo.jpg",
    lineup: "images/bonnarooLineup.jpg",
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
    year: 2016,
    GA: "$335",
    VIP: "$700",
    image: "edclv.jpg",
    lineup: "",
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

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("Listening on port " + port);
})
