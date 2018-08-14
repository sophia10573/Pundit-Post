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


  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
