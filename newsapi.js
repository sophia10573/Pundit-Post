var query = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d1e2bdf6ab9f4a9e86a92641b923f51b"

var newsRequest = new XMLHttpRequest();
newsRequest.open('GET',query, false);

newsRequest.send();

var response = JSON.parse(newsRequest.responseText);

//len(thing) = thing.length
for (var i = 0; i < response["articles"].length; i++){
  var title = response["articles"][i]["title"]
  console.log(title)
  var newsdiv = document.getElementById("newshighlights");
  newsdiv.innerHTML+=title;
  newsdiv.innerHTML += "<br><br>";
}
