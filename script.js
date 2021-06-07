

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

//This is how the scripting of corousel qworks in my own words:
//BDD
// In this case we have defined the function and invoked it .
// We then hoist our variable i not to limit the scope of the variable
// Remember in the corousel we had different images or rather more than one image .
// We threfore loop through them at different intervals of 3000 milliseconds and display them

//In simple term here we have a call back function of which it is the carousel.
// The setimeout here registers the function carousel which is to be invoked after 3000 milliseconds
//With our most important methods like getElementByClassName we access the different sets of pictures and display them in a slide show
// //created a function
function Book(){
  //fetching the elements
  var company_name = document.getElementById("company_name").value;
  var phone_number = document.getElementById("phone_number").value;
  var location = document.getElementById("location").value;
  var date = document.getElementById("date").value;
  var time=document.getElementById("time").value;
  alert(`Registered your company${company_name}, and phone number${phone_number}, location${location} booking date${date} and booking time${time}`)
}



