
alert("Welcome to the Maze");
var userName = prompt("What is your name?");

function newGame(){
  var decision = prompt(userName + " are you ready to face the perils that lie within the maze? ")
 .toLowerCase();
if(decision === "yes"){
  alert("Great, let's begin!");
}
else if(decision === "no") {
  alert("That's ok, the maze is only for true heroes anyways");
}
else{
  alert("I do not understand, do you mean yes or no?");
    newGame();
}
};
newGame();
alert("My name is artemis and I will be your guide.Let's go!");
alert("You enter the maze's antechamber and are faced with 3 wooden doors with etching on them. The 1st has a Bull, the 2nd has a Fish and the 3rd a Tree.")
var choice = prompt("Which door will you choose, BULL -FISH -TREE ?").toLowerCase();

function bull(){
  alert("You've chosen " + choice +" , you open the door and step through and begin your journey.");
  alert("After walking a while you come to a fork in the road.");
  var direction =prompt("Do you go left or right?").toLowerCase();
  alert("You take the " + direction + " and continue through the maze");
};
function quest(choice){
  if (choice === "bull"){
      bull();
  }
  else if (choice === "fish"){
    alert(choice);

  }
  else {
    alert(choice);
  }
};

quest();
