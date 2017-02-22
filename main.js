
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
  alert("After what seems like hours you come to a place with 3 paths...");
  var direction2 = prompt("Do you take the path on the: LEFT- RIGHT - CENTER?").toLowerCase();
   if(direction2 === "left"){
        alert("You wonder along the maze for what seems like days...has it been days?You've lost track of time and you're hungry and thirsty.How long has it been?");
          alert("You're lost within The Maze. YOU LOSE!");
      }
   else if(direction2 ==="center"){
       alert("Oh No!! You've run into a Minotaur!!He's very angry and you need to defeat him in order to continue your journey");
       var slay = prompt("When you are ready, type: Attack ");
       var slaying = true;
       var youHit = Math.floor(Math.random() * 2);
       var damageThisRound = Math.floor(Math.random() * 5 + 1);
       var totalDamage = 0;

while (slaying) {
    if (youHit) {
       alert("You hit the minotaur and did " + damageThisRound + " damage!");
          totalDamage += damageThisRound;
                if (totalDamage >= 4) {
                   alert("You did it! You slew the minotaur!");
                   slaying = false;      }
                else {
                 youHit = Math.floor(Math.random() * 2);   }
                  }
     else {
        alert("END OF THE ROAD!!The minotaur skewers you with it's mighty horns");
         slaying = false;
             }
      }

}

else{
     alert("You wonder along the maze for what seems like days...has it been days?You've lost track of time and you're hungry and thirsty.How long has it been?");
          alert("You're lost within The Maze. YOU LOSE!");
}

function fish(){
  alert("You've chosen " + choice +" , you open the door and step through and begin your journey.");

  alert("After walking a while you come to a fork in the road.");
  var direction =prompt("Do you go left or right?").toLowerCase();
  alert("You take the " + direction + " and continue through the maze");
  alert("After what seems like hours you come to a place with 3 paths...");
  var direction2 = prompt("Do you take the path on the: LEFT- RIGHT - CENTER?").toLowerCase();
}

}
function quest(choice){

  if (choice === "bull"){
      bull();
       }
  else if (choice === "fish"){
        return alert(choice);
           }
  else {
      alert(choice);
  }

}


quest(choice);
