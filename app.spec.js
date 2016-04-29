var chai = require("chai");
var request = require("request");
var assert = chai.assert;

var app = require("./app.js");

var RANDOMIZE = 0;
var server = app.listen(RANDOMIZE);
var port = server.address().port;

describe("Info can be", function() {

  it("posted/sort", function(done) {
    request({
      method: "POST",
      url: "http://localhost:" + port + "/sort",
      json: {state: "any", month: "any"}
    }, function(error, response,body) {
      assert.equal(response.statusCode, 200)
      done();
    })
  })

  it("gotten", function(done) {
    request("http://localhost:" + port + "/view?q=0", function(error, response, body) {
      assert.equal(response.statusCode, 200)
      done();
    })
  })

  it("posted/review", function(done) {
    request({
      method: "POST",
      url: "http://localhost:" + port + "/addReview",
      json: {name: "Bob", review: "Review", festivalId: "0", date: "11/25/2017"}
    }, function(error, response, body) {
      assert.equal(response.statusCode, 200)
      server.close();
      done();
    })
  })
})
