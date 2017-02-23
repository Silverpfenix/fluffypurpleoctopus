
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
}
newGame();
alert("My name is artemis and I will be your guide.Let's go!");
alert("You enter the maze's antechamber and are faced with 3 wooden doors with etching on them. The 1st has a Bull, the 2nd has a Fish and the 3rd a Tree.");
var choice = prompt("Which door will you choose, BULL -FISH -TREE ?").toLowerCase();
var victory = true;
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
          victory =false;
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
         victory = false;
             }
      }

}

else{
     alert("You wonder along the maze for what seems like days...has it been days?You've lost track of time and you're hungry and thirsty.How long has it been?");
          alert("You're lost within The Maze. YOU LOSE!");
          victory = false;
}
}
function fish(){
   alert("You've chosen " + choice +" , you open the door and step through and begin your journey.");

   alert("After walking a while you come to a fork in the road.");
   var direction =prompt("Do you go left or right?").toLowerCase();
   alert("You take the " + direction + " and continue through the maze");
   alert("After what seems like hours you come to a place with 3 paths...");
   var direction2 = prompt("Do you take the path on the: LEFT- RIGHT - CENTER?").toLowerCase();
if(direction2 === "right"){
   alert("You take the "+ direction2 + " path." +" Up ahead you see a river, as you aproach you notice that it runs straight through the maze and there is not a bridge in sight. Doing a quick search of the area you see a small row boat, on closer inspection you notice that it has a small hole in it.");
   alert("Do you take your chances with the boat or  go back and pick another path? ");
    var choice2 =prompt("BOAT or GO BACK").toLowerCase();
      if(choice2 === "boat"){
          alert("You've decided to take your chances on the boat");
          var sail = prompt("When you're ready to push of type: Row");
          var luck = Math.random();
          if( luck <= 0.50){
                  alert("Whew, it was a close call but you made it across!!. ");
                        }
          else{
                 alert("You're boat has taken to much water, as you sink you notice that the fish  are starting to bite you");
                 alert("The river is infested, you get eaten in seconds. YOU LOSE!!");
                      victory = false;
                   }
             }
          else{
            var direction3 = prompt("Do you take the path on the: LEFT- CENTER?").toLowerCase();
            alert("You've chosen the " +direction3+" path. You wonder along the maze for what seems like days...has it been days?You've lost track of time and you're hungry and thirsty.How long has it been?");
            alert("You're lost within The Maze. YOU LOSE!");
              victory = false;
              }
      }
else{
     alert("You've chosen the " +direction2+" path. You wonder along the maze for what seems like days...has it been days?You've lost track of time and you're hungry and thirsty.How long has it been?");
     alert("You're lost within The Maze. YOU LOSE!");
     victory = false;
    }
}

function tree(){
    alert("You've chosen " + choice +" , you open the door and step through and begin your journey.");
    alert("After walking a while you come to a fork in the road.");
    var direction =prompt("Do you go left or right?").toLowerCase();
    alert("You take the " + direction + " and continue through the maze");
    alert("After what seems like hours you come to a place with 3 paths...");
    var direction2 = prompt("Do you take the path on the: LEFT- RIGHT - CENTER?").toLowerCase();
  if (direction2 ==="left"){
      alert("You've chosen the "+direction2+" path.You continue on your journey, walking endlessly for what seems like hours");
      alert("You're tired and hungry and your feet hurt, but just when you're about to give up hope you see a clearing up ahead.");
      alert("As you aproach you see that it is a large beautiful garden with fruit trees and benches and a large fountain in the middle.");
      var trap =prompt("Would you like to rest for a bit or continue on your journey? REST-CONTINUE").toLowerCase();
  if (trap ==="rest"){
      alert("You choose to grab an apple from a nearby tree and sit in one of the benches...");
      alert("After finishing the apple you decide to rest your eyes for a minute......");
      alert("You've fallen into eternal slumber. YOU LOSE!!");
          victory = false;
                }
  else{
        alert("Even though you're exhausted, you decide to dig deep and keep on going, the sooner you get this done the better");
          }
              }
  else{
        alert("You've chosen the "+direction2+" path and continue on in your journey");
        alert("You wonder along the maze for what seems like days...has it been days?You've lost track of time and you're hungry and thirsty.How long has it been?");
        alert("You're lost within The Maze. YOU LOSE!");
         victory = false;
          }
}

function quest(choice){

  if (choice === "bull"){
      bull();
       }
  else if (choice === "fish"){
       fish();
           }
  else {
      tree();
  }

}


quest(choice);
var conquerer=true;
if(victory === true){
    alert("You have been sucessful so far in the maze,the end is almost near");
    alert("As your walking you notice a large set of doors and something moving off in the distance....");
    alert("As you get closer you take in the creature that's pacing in front of the doors...");
    alert("You've run into a Sphinx.It has the body of an overlarge lion and great clawed paws.It's head however is that of a woman. As you draw near she turns and speaks to you.");
    alert("Greetings "+ userName + ", you are very near your goal.The only way out is through me. I will ask 3 riddles.Answer correctly and you may pass.Answer wrong and I attack.");
    confirm("Are you ready?");
    var candle =prompt("I'm tall when I'm young and I'm short when I'm old, what am I?").toLowerCase();
    if(candle === "a candle"){
      alert("Correct");
    }
    else{
      alert("WRONG");
      alert("The Sphinx devours you. YOU LOSE");
      conquerer=false;
      }
  if(conquerer === true){
    var tea =prompt("What starts with the letter T, is filled with T and ends in T?").toLowerCase();
        if(tea === "a teapot"){
          alert("Correct");
        }
        else{
          alert("WRONG");
          alert("The Sphinx devours you. YOU LOSE");
          conquerer=false;
          }
            }
  if(conquerer === true){
    var flame =prompt("Feed me and I live, yet give me a drink and I die, what am I?").toLowerCase();
     if (flame ==="a fire"){
       alert("Congratulations!!! You win!! You have bested the Sphinx and may exit the maze!!");
     }
     else{
       alert("WRONG");
       alert("The Sphinx devours you. YOU LOSE");
       conquerer=false;
       }
  }

}
