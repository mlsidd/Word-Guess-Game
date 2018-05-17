var wins = 0;
var winEl = document.getElementById('winCount');
winEl.innerHTML = wins;
var losses = 0;
var lossesEl = document.getElementById('lossCount');
lossesEl.innerHTML = losses;
var lives = 10;
var livesEl = document.getElementById('lives');
livesEl.innerHTML = lives;
//make an array of 26 letters for letter bank
var possibleLetters = "abcdefghijklmnopqrstuvwxyz";
var possibleLettersArray = possibleLetters.split(" ");
//add alphabet to page
var alpha = document.getElementById('alphabet');
alpha.innerHTML = possibleLettersArray;
//SET UP to select a word for the game
var wordList = ["santa", "elf", "christmas", "jesus", "tree", "mistletoe", "candy cane", "holly", "grinch", "december", "carol", "jolly", "bells", "chimney", "eggnog", "rudolph", "reindeer", "frosty", "snowman", "prancer", "snowflake", "tinsel", "winter", "sled", "snow", "wreath", "yule", "joy", "christ", "star", "nativity", "nutcracker", "gingerbread", "ornament", "noel", "jingle"];
//determine how many words are in the array
var lengthOfWordList = wordList.length; 
//generate a random index number to use for picking random word from list
var randomNumber = Math.floor((Math.random() * lengthOfWordList));
var curWord = wordList[randomNumber];
//determine how many letters are in the current word
var numOfBlanks = curWord.length;
//make a new empty array that will hold the blanks for the current word
var blanks = [];
//Add a blank line at each index based on how long the word is
for(var s=0; s<numOfBlanks; s++){
blanks[s] = "_";}
//add blanks to the document page
var elBlanks = document.getElementById('blanks');
elBlanks.innerHTML = blanks;

var userLetterGuess, elUserGuess, alpha, indexOfAlphabetGuess, newBlanks, blanks, elBlanks, winMessage, winPic;   

document.onkeyup = function(e){
    userLetterGuess = e.key;
    elUserGuess = document.getElementById('userGuess');
    elUserGuess.innerHTML = userLetterGuess;
    //erase letter from alphabet bank         
    indexOfAlphabetGuess = possibleLettersArray.indexOf(userLetterGuess);
    possibleLettersArray.splice(indexOfAlphabetGuess, 1);
    alpha = document.getElementById('alphabet');
    alpha.innerHTML = possibleLettersArray;
 
    if (lives > 0) {
    for (i=0; i<numOfBlanks.length; i++) {
        if (userLetterGuess === curWord.charAt(i)) {
            blanks.splice(i, 1, userLetterGuess);
            document.getElementById("blanks").innerHTML = blanks;
            if (blanks.charAt(i) != "_") {
                winMessage = document.getElementById('winLoseMessage');
                winMessage.innerHTML = "You win!";
                winPic = document.getElementById('winPicture');
                winPic.innerHTML = '<img src="assets/images/santa.jpg">';   
                //add to total wins
                win ++;
            }
        } else {
        lives --;
            if (lives == 0) {
                losses ++;
                winMessage = document.getElementById('winLoseMessage');
                winMessage.innerHTML = "Game Over!";  
            }
        }
    }
    } else 
        if (lives == 0) {
            lives = 10;
            livesEl = document.getElementById('lives');
            livesEl.innerHTML = lives;
            //make an array of 26 letters for letter bank
            possibleLetters = "abcdefghijklmnopqrstuvwxyz";
            possibleLettersArray = possibleLetters.split("%");
            //add alphabet to page
            alpha = document.getElementById('alphabet');
            alpha.innerHTML = possibleLettersArray; 
            //SET UP to select a word for the game
            wordList = ["santa", "elf", "christmas", "jesus", "tree", "mistletoe", "candy cane", "holly", "grinch", "december", "carol", "jolly", "bells", "chimney", "eggnog", "rudolph", "reindeer", "frosty", "snowman", "prancer", "snowflake", "tinsel", "winter", "sled", "snow", "wreath", "yule", "joy", "christ", "star", "nativity", "nutcracker", "gingerbread", "ornament", "noel", "jingle"];
            //determine how many words are in the array
            lengthOfWordList = wordList.length; 
            //generate a random index number to use for picking random word from list
            randomNumber = Math.floor((Math.random() * lengthOfWordList));
            curWord = wordList[randomNumber];
            //determine how many letters are in the current word
            numOfBlanks = curWord.length;
            //make a new empty array that will hold the blanks for the current word
            blanks = [];
            //Add a blank line at each index based on how long the word is
            for(var s=0; s<numOfBlanks; s++){
            blanks[s] = "_";}
            //add blanks to the document page
            elBlanks = document.getElementById('blanks');
            elBlanks.innerHTML = blanks; 
        }

    }