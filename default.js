var sortButton = document.getElementById("sortButton");
var state = document.getElementById("state");
var month = document.getElementById("month");
var carousel = document.getElementById("carousel");

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
      carousel.classList.add("hidden");
    }
    else if(xhr.status == 404) {

    }
  }
})
