
//Sets the interval to time the carousel;
// $('.carousel').carousel({
//   interval: 3000
// });

//Stores array of correct answers
var answers = [];

//global vars to count the game stats
var correctCount = 0;
var incorrectCount = 0;
var blankCount = 0;


//Starts cycling the carousel
//$('.carousel').carousel('cycle');


// Going to use this timeout function to control the carousel to make all updates in one swooop
// NOTE the carousel can be controled with it's own Jquery methods but it might make triggering events a bit more complicated
// than simply using a timout function
//This will alert every 10 seconds
//switching pages on the carousel and determining whether there was a win or loss
setInterval(function(){

  //reads input at set interval

  var input = $( "input:checked" ).val();
  console.log( input + " is checked!");

  $(":radio").prop('checked', false);

  //$('.btn-group').find('label').removeClass('active').end().find('[type="radio"]').prop('checked', false);

  $('.carousel').carousel('next');








 }, 10000);





var nextSlide = function(){

}


//FIRES WHEN TIMOUT EXCECUTES SLIDE FOR CAROUSEL
$('.carousel').on('slide.bs.carousel', function () {

  console.log("executing slide logic");
  // do something…
})
