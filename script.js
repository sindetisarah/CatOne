

// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

function Book(){
  var company_name = document.getElementById("company_name").value;
  var phone_number = document.getElementById("phone_number").value;
  var location = document.getElementById("location").value;
  alert(`${company_name},${phone_number},${location}`)
}



