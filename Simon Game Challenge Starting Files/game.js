buttonColours=["red","blue","green","yellow"];
gamePattern=[];


function nextSequence(){
    var randomNumber = Math.floor(Math.random() *4);
    var randomChosenColour =buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); 
}