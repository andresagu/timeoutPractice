
//Sets the interval to time the carousel;
$('.carousel').carousel({
  interval: 3000
});


//Starts cycling the carousel
$('.carousel').carousel('cycle');


// Going to use this timeout function to control the carousel to make all updates in one swooop
// NOTE the carousel can be controled with it's own Jquery methods but it might make triggering events a bit more complicated
// than simply using a timout function
setTimeout(function(){ alert("Hello"); }, 3000);

//This will handle all logic for switching slides and...
//Determine if the guess was correct
//update score
//update any trackers that will be needed

$( "input" ).on( "click", function() {
console.log($( "input:checked" ).val() + " is checked!");
});



var nextSlide = function(){

}
