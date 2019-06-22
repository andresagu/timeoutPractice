
//Sets the interval to time the carousel;
// $('.carousel').carousel({
//   interval: 3000
// });

//Stores array of correct answers
var answers = [4,3,4,1,2];

//global vars to count the game stats
var correctCount = 0;
var incorrectCount = 0;
var blankCount = 0;

//VARS TO KEEP TRACK OF THE carousel
var totalItems = $('.carousel-item').length;
var currentIndex;

console.log(totalItems);
//Starts cycling the carousel
//$('.carousel').carousel('cycle');


//ON THE INITIAL RUN THIS RENDERS ALL CHECKBOXES INACTIVE AND SETS THE PRESELECTED LABELS TO false
$("input:radio").prop('checked', false);
$("input:radio").closest("label").removeClass("active");


// Going to use this timeout function to control the carousel to make all updates in one swooop
// NOTE the carousel can be controled with it's own Jquery methods but it might make triggering events a bit more complicated
// than simply using a timout function
//This will alert every 10 seconds
//switching pages on the carousel and determining whether there was a win or loss
setInterval(function(){

  //reads input at set interval
  timeUp();

  //This will ensure to reset the checked property for any checked answers so it doesn't affect future answers
  //THIS SHOULD RUN BEFORE EACH SLIDE CHANGE TO ENSURE NO ERRORS IN ANSWER READ SHOW UP (UNSURE WHY ATM)
  $("input:radio").prop('checked', false);
  $("input:radio").closest("label").removeClass("active");

  if(currentIndex+1 < totalItems){
  $('.carousel').carousel('next');
}

 }, 10000);





var timeUp = function(){

  var input = $( "input:checked" ).val();
  console.log(input);


  currentIndex = $('div.active').index();

  console.log(currentIndex);

  if(input==answers[currentIndex]){
    correctCount++;
    console.log("correct");
  }
  else{
    incorrectCount++;
    console.log("incorrect");
  }

  if(currentIndex+1 == totalItems){
    $(".carousel").carousel('pause');
  }


}


//FIRES WHEN TIMOUT EXCECUTES SLIDE FOR CAROUSEL
$('.carousel').on('slide.bs.carousel', function () {

  console.log("executing slide logic");
  // do something…
})
