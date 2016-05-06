var express = require("express");
var app = express();
var jsonParser = require("body-parser").json();
var mongo = require("mongodb");
var myClient = mongo.MongoClient;
var uri = "mongodb://heroku_lc7mrf79:cf5o9loeigm92uv2l0mdq8cgjs@ds013192.mlab.com:13192/heroku_lc7mrf79";



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
    favorite: false,
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
    favorite: false,
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
    favorite: false,
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
    favorite: false,
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
    favorite: false,
    image: "images/okeechobee.jpg",
    lineup: "images/okeechobeeLineup.jpg",
    reviews: [["Joey S.", "So this marks Florida's first big music festival because Ultra doesn't count. I gave it four stars for all the right reasons but there was some exceptions which keeps it from being a perfect 5 rating . Music line up was diverse and timed right. Stages were set up perfectly and pretty cool because they were placed in this secluded area surrounded by trees giving it an oasis feeling. I received a VIP treatment because of my friends in Bangarang. Loved seeing some backstage action. didn't get to meet anyone hugely famous though. Overall perfect place for a music festival.", "3/7/2016"]],
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
    favorite: false,
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
    favorite: false,
    image: "images/dreamscape.png",
    lineup: "images/dreamscapeLineup.jpg",
    reviews: [["Vanessa G.", "Well this was a first for me in terms of festivals, and the experience was certainly a religious one hehe...I was extremely excited about coming here, but the camping part was the reason why I hesitated, you see I have never been camping and I am not a very outdoors person, so the hubs and I decided to just go to see the bands we really wanted to see (THE AVETT BROTHERS AND MUMFORD AND SONS!!!) explore the fairgrounds and get out of there, and that is exactly what we did.While the festival lasted 3 days, we ended up going on Sunday and it was more than enough for us.", "3/11/2015"]],
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
    favorite: false,
    image: "images/hangout.jpg",
    lineup: "images/hangoutLineup.jpg",
    reviews: [["Will P.", "Hangout fest experience was great!!! My dad and I went last year and got to the site around 5:30. Once we got to the site, we got some eats and walked around. After that we went to the Malibu Beach tent which had some great vibes with autograf playing.  After that we went to the main stage and saw spoon, which was great.  But then we saw some dark clouds rolling so we reconvened at the boom boom tent and waited for Jack U.  Once that was done we left the site and got on the shuttle which was well organized and clean. The next day we got to the site around noon and went to the hangout for lunch. The waiters there were nice and when my dad and I wanted to move to a different table to get a better view of the stage they understand and were chill about it. Very nice atmosphere.", "4/28/2016"]],
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
    favorite: false,
    image: "images/summercamp.png",
    lineup: "images/summercampLineup.jpg",
    reviews: [["Elle N.", "  I've been to Summercamp 3 times and each time gets better and better. I can't wait to go back again this year! I never want to leave when its over, it becomes your home. I wish electronica wasn't taking over but its happening everywhere so what can ya do? I love being able to see Umphrey's and Moe. 3 nights in a row and camping so close to the stages. I love the campfire stage, its perfect for relaxing after the big shows. I highly reccomend going on thursday for the pre-party, it is definitely worth the extra bucks. I LOVE Summercamp!", "3/11/2011"]],
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
    favorite: false,
    image: "images/sunset.png",
    lineup: "images/sunsetLineup.png",
    reviews: [["Phillip C.", "One of the best music festivals I've ever been to! At the same time they had tons of issues, with the VIP tent unsafe on saturday and just having them go into the general admission area. On Sunday with the rain they had to shovel people into the Ray Jay stairwell to get people out of the rain/lightning. Nothing they could do to make that any more enjoyable for everyone. The layout of the event was perfect for everyone.", "5/26/2014"]],
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
    favorite: false,
    image: "images/lightning.jpg",
    lineup: "images/lightningLineup.jpg",
    reviews: [["Debbie M.", "AWESOME Festival!!  Tips:  The extra money for car camping is worth it or getting the already set up for you nice tents! Otherwise you have to lug your stuff LONG distances to camp sites over some STEEP terrain. Cell coverage not great-poor, Walkie talkies!  If u separate from friends very hard to find again with spotty cell coverage. Very dusty - bring buff/bandana for face.  Sunglasses and hat a must.  Food expensive!!  Showers $8.  Good walking shoes, tons of walking, high boots keep feet from getting super dirty.   Wear ear plugs all the time otherwise go deaf from sound systems.", "5/23/2015"]],
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
    favorite: false,
    image: "images/bonnaroo.jpg",
    lineup: "images/bonnarooLineup.jpg",
    reviews: [["Shaurica C.", "Went to my first Bonnaroo last year, and loved it! The only thing that I can say is that the camping grounds are VERY dusty! Like, literally, you'll be covered in layers of dust on a daily. Not sure if there's much they can do about that, though. But I loved my first time here, and can't wait to go back this year!", "3/23/2016"]],
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
    favorite: false,
    image: "images/edclv.jpg",
    lineup: "",
    reviews: [["Joanna A.", "Two things to keep in mind. COME EARLY. You will be stuck in ridiculous traffic. EAVE EARLY. My friend texted me around 2:30 AM saying she was going to leave to avoid traffic. Keep in mind the event ends at 5:30AM. I thought she was insane (lol) I left when the event ended. Got to my car by 6 AM and I kid you not left the venue parking lot at 9 AM!!! 3 fucking hours to leave the parking lot. And don't forget how hot Vegas is in the summer. It had to be the worst 3 hours of my life. Other then that the venue is great and EDC is amazing.", "7/1/2015"]],
    dataId: 12
  }

];

myClient.connect(uri, function(error, database) {
  if(error) {console.log(error)}
  else {
    var favorites = database.collection("favorites");
    favorites.find({}).toArray(function(error, docs) {
    for(var i = 0;i < docs.length;i++) {
      for(var x = 0;x < festivals.length;x++) {
        if(docs[i].id == festivals[x].dataId) {
          festivals[x].favorite = true;
        }
      }
    }
    database.close();
    })
  }
})

app.get("/getFavorites", function(req, res) {
  myClient.connect(uri, function(error, database) {
    if(error) {console.log(error)}
    else {
        var favorites = database.collection("favorites");
        favorites.find({}).toArray(function(error, docs) {
        res.json(docs);
        database.close();
        })
    }
  })

})

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
      myClient.connect(uri, function(error, database) {
        if(error) {console.log(error)}
        else {
            var favorites = database.collection("favorites");
            favorites.find({}).toArray(function(error, docs) {
            for(var i = 0;i < docs.length;i++) {
              for(var x = 0;x < festivals.length;x++) {
                if(docs[i].id == festivals[x].dataId) {
                  festivals[x].favorite = true;
                }
              }
            }
            database.close();
            })
        }
      })
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

app.get("/favorite", function(req, res) {
  var matched = [];
  for(var i = 0;i < festivals.length;i++) {
    if(req.query.q == festivals[i].dataId) {
      festivals[i].favorite = true;
      matched.push(festivals[i])
    }
  }
  if(matched.length > 0) {
    myClient.connect(uri, function(error, database) {
      if(error) {console.log(error)}
      else {
        var favorites = database.collection("favorites");
        favorites.insert(
          {name: matched[0].name, month: matched[0].month, dates: matched[0].dates, id: matched[0].dataId})
          , function(error, results) {
            res.sendStatus(200);
            database.close();
          }
      }
    })
    res.sendStatus(200)
  }
  else {res.sendStatus(404)}
})

app.delete("/removefavorite", function(req, res) {
  var matched = [];
  for(var i = 0;i < festivals.length;i++) {
    if(req.query.q == festivals[i].dataId) {
      festivals[i].favorite = false;
      matched.push(festivals[i])
    }
  }
  if(matched.length > 0) {
    myClient.connect(uri, function(error, database) {
      if(error) {console.log(error)}
      else {
        var favorites = database.collection("favorites");
        favorites.remove(
          {id: matched[0].dataId}
          , function(error, results) {
            res.sendStatus(200);
            database.close();
          }
        )
      }
    })
  }
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
