var sortButton = document.getElementById("sortButton");
var state = document.getElementById("state");
var month = document.getElementById("month");
var carousel = document.getElementById("carousel");
var results = document.getElementById("results");
var profileContainer = document.getElementById("profile");
var titles = document.getElementsByClassName("name");
var profileImage = document.getElementById("profileImage");
var dates = document.getElementById("footerDates");
var footerName = document.getElementById("footerName");
var modalLineup = document.getElementById("modalImage");
var profileLink = document.getElementById("profileLink");
var profileAddress = document.getElementById("profileAddress");
var price = document.getElementById("footerPrice");

sortButton.addEventListener("click", function() {
  var data = {
    state: state.value.toLowerCase(),
    month: month.value.toLowerCase()
  };
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/sort", true );
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onload = function() {
    if(xhr.status == 200) {
      var response = JSON.parse(xhr.response);
      carousel.classList.add("hidden");
      if(!$(results).hasClass("hidden")) {
        results.classList.remove("hidden");
      }
      profile.classList.add("hidden");
      results.classList.remove("hidden");
      while(results.hasChildNodes()) {
        results.removeChild(results.lastChild)
      }
      for(var i = 0;i < response.length;i++) {

        var row = document.createElement("div");
        row.className = "row";

        var div = document.createElement("div");
        div.className = "col-md-10 col-md-offset-1";

        var panel = document.createElement("div");
        panel.className = "panel panel-default";

        var panelBody = document.createElement("div");
        panelBody.className = "panel-body";

        var date = document.createElement("div");
        date.className = "col-md-1 date";

        var month = document.createTextNode(response[i].month);

        var monthBreak = document.createElement("br");

        var dates = document.createTextNode(response[i].dates);

        var datesBreak = document.createElement("br");

        var day = document.createTextNode(response[i].day);

        var info = document.createElement("div");
        info.className = "col-md-5 info";

        var name = document.createElement("a");
        name.className = "name";
        name.setAttribute("data-id", response[i].dataId)
        name.textContent = response[i].name

        var infoBreak = document.createElement("br");

        var location = document.createElement("div");
        location.textContent = response[i].venue + ", " + response[i].city + ", " + response[i].state;

        var priceDiv = document.createElement("div");
        priceDiv.className = "col-md-3 price";

        var ga = document.createTextNode("GA:  " + response[i].ga);

        var priceBreak = document.createElement("br");

        var vip = document.createTextNode("VIP:  " + response[i].vip);
        vip.className = "hidden"

        var image = document.createElement("img");
        image.className = "listingImage"
        image.setAttribute("src", response[i].image);

        date.appendChild(month);
        date.appendChild(monthBreak);
        date.appendChild(dates);
        date.appendChild(datesBreak);
        date.appendChild(day);
        panelBody.appendChild(date);
        info.appendChild(name);
        info.appendChild(infoBreak);
        info.appendChild(location);
        panelBody.appendChild(info);
        priceDiv.appendChild(ga);
        priceDiv.appendChild(priceBreak);
        priceDiv.appendChild(vip);
        panelBody.appendChild(priceDiv);
        panelBody.appendChild(image);
        panel.appendChild(panelBody);
        div.appendChild(panel);
        row.appendChild(div);
        results.appendChild(row);

      }
      showEvent();
    }
    else if(xhr.status == 404) {
    }
  }
})

function showEvent() {
  for(var i = 0;i < titles.length;i++) {
    titles[i].addEventListener("click", function() {
      var id = this.dataset.id;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/view?q=" + id, true);
      xhr.send();
      xhr.onload = function() {
        if(xhr.status == 200) {
          var response = JSON.parse(xhr.response);
          carousel.classList.add("hidden");
          profileContainer.classList.remove("hidden");
          results.classList.add("hidden");
          profileImage.setAttribute("src", response[0].image);
          dates.textContent = response[0].day + ", " + response[0].month + " " + response[0].dates + ", " + response[0].year;
          footerName.textContent = response[0].name;
          modalLineup.setAttribute("src", response[0].lineup);
          profileLink.textContent = " " + response[0].website;
          profileLink.setAttribute("href", "http://" + response[0].website);
          profileAddress.textContent = " " + response[0].venue + ", " + response[0].city + ", " + response[0].state
          profileAddress.setAttribute("href", "http://maps.google.com/?q=" + response[0].venue + "+" + response[0].city);
          price.textContent = "GA: " + response[0].ga + " VIP: " + response[0].vip;
        }
      }
    })
  }
}
