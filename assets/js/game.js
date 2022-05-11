
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[2]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run 
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

//function to start a new game
var startGame = function(){
  //resets plyaer stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney =  10;

  // fight each enemy-robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      // reset enemyHealth before starting new fight
      enemyHealth = 50;
  
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      if (playerHealth > 0 && i< enemyNames.length - 1) {

        //ask if player would like to use the store
        var storeConfirm = window.confirm("the fight is over, vist the store before the next round?");

        //if yes, take them to the store() Function

        if (storeConfirm){
          shop();
        }
      }
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
    //after the loop ends, player is either out of health or enemis to fight, so run the endGame function
    endGame();
  
}

//function to end the entire game
var endGame = function(){
  //if playeri si still alive, player wins!
  if(playerHealth > 0){
    window.alert("Great job, you've survived the game! you now have a score of " + playerMoney + ".");
  }
  else{
    window.alert("You've lost your robot in battle.");
  }

  //ask if player would like to play again
  var playAgainConfirm = window.confirm("Would you like to play again");

  if (playAgainConfirm){
    //restart game
    startGame();
  }
  else{
    window.alert("Thank you for playing Robot Gladiators! Come back soon!")
  }
}


var shop = function(){
  var shopOptionPrompt = window.prompt(
    "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
  switch (shopOptionPrompt){
    case "refill":
    case "REFILL":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars");

        //increase halth and decrease money
        playerHealth= playerHealth+20;
        playerMoney= playerMoney - 7;
        break;
      }
      else{
        window.alert("You don't have enough money!")
      }
      break;
     
    
    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7 ){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        // increase attack and decrease money
       playerAttack = playerAttack + 6
       playerMoney= playerMoney - 7
       break;

      }

      else{
        window.alert("You don't have enough money!")
      }
      break;
      
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pik a valid option
      shop();

      break;
  }
}

//start the game when the page loads
startGame();


//wrap the game logic in startGame function
//When the player is defeated or there are no more enemies, call an endGame function thet
//  *alerts the player's total states
//  * Asks the player if they want to play agian
//  *if yes, call startGame to restart the geme
// After the player skips or defeats an enemy and there are more robots to fight:
//  *ask the player if they want to shop
//  *if no continue as normal
//  *if yes, call the shop function
//  *in the shop function ask the player if they want to refil health upgrad attack or leave the shop
//  *if upgrad, subtact money points from player to increase attack power
//  *if leave, alert goodbpye and exit the function
//  *if any other invalid option, call shop again.


