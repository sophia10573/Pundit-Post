function search(){
  // location.replace("search.html");
  var input = document.getElementById("userInput").value;
  console.log(input);
  var result = " "
  for (i=0; i < data.length; i++) {
    if (input == "") {
      document.getElementById("searchresults").innerHTML = ""
      break
    }
    else if (data[i].text.includes(input)){
      console.log(data[i].page)
      // document.getElementById("result1").innerHTML= data[i].page
      result += "<a href=" + data[i].link + ">" + data[i].page + "</a>"
      result += "<br>"
    document.getElementById("searchresults").innerHTML = "Search result found on page:"+"<br>"+result
    }
    }
  }

function checkKey(event){
  if (event.keyCode == 13){
    search();
  }
}
  document.addEventListener("keydown", checkKey);
