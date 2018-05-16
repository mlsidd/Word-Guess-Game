//set the score to 0 wins and 0 losses and display on page
var wins = 0;
var winEl = document.getElementById('winCount');
winEl.innerHTML = wins;
var losses = 0;
var lossesEl = document.getElementById('lossCount');
lossesEl.innerHTML = losses;
var curWord, wordList, test, lengthOfWordList, randomNumber, numOfBlanks, blanks, blanks1, elBlanks, lives, livesEl, count, winMessage; 

//start game when user presses key
document.addEventListener('keypress', (event) => {
    var userGuess = event.key;
    var elUserGuess = document.getElementById('userGuess');
    elUserGuess.innerHTML = userGuess;
    var blanks;

    for (var i = 0; i<numOfBlanks; i++) {

         //if user presses key and lives are equal to 10 or 0 and all blanks have filled in than start a new game...
    if (event.key.length < 7 && (lives == 0 || lives == 10) && blanks.charAt(i) != "_") {
        startGame();
        eraseAlpha(); 
        checkGuess();
        checkForWin();
        checkForLoss();} else 
    
    //If user presses key and lives have not reached 0 and there are still remaining blanks to fill in than check the letter guessed
    if (event.key.length < 7 && (lives != 0 || lives != 10) && blanks.charAt(i) === "_") {
        eraseAlpha();
        checkGuess();
        checkForWin();
        checkForLoss();}  

        //set up the start of a new game
        function startGame() {
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
        blanks[s] = "_";
        //add blanks to the document page
        var elBlanks = document.getElementById('blanks');
        elBlanks.innerHTML = blanks;
        //set up the score and remaining guesses and set in html page
        var lives = 10;
        var livesEl = document.getElementById('lives');
        livesEl.innerHTML = lives;
        var count = numOfBlanks;
        var winMessage = document.getElementById('winLoseMessage');
        winMessage.innerHTML = "Guess a Letter"     
        //make an array of 26 letters for letter bank
        var possibleLetters = "abcdefghijklmnopqrstuvwxyz";
        var possibleLettersArray = possibleLetters.split("%");
        //add alphabet to page
        var alpha = document.getElementById('alphabet');
        alpha.innerHTML = possibleLettersArray;
        }  //END OF GAME SET UP 
        
    //erase letter from alphabet bank  
    function eraseAlpha() {      
    var indexOfAlphabetGuess = possibleLettersArray.indexOf(userLetterGuess);
    possibleLettersArray[indexOfAlphabetGuess]=" ";
    var alpha = document.getElementById('alphabet');
    alpha.innerHTML = possibleLettersArray;
    }//end of erase letters function

 //check if all blanks are gone to see if user has won
    function checkForWin() {
        if (blanks.charAt(i) != "_") {
            var winMessage = document.getElementById('winLoseMessage');
            winMessage.innerHTML = "You win!";
            var winPic = document.getElementById('winPicture');
            winPic.innerHTML = '<img src="assets/images/santa.jpg">';   
            //add to total wins
            win ++;
    }}

//check if there are no guesses left
    function checkForLoss(){
        if (lives==0) {
            //if none left, add 1 to losses score
            losses ++;
            var winMessage = document.getElementById('winLoseMessage');
            winMessage.innerHTML = "Game Over!";
            }}

    //check letter key pressed to current word
    function checkGuess () {
        if (userLetterGuess === curWord.charAt(i)) {
            blanks[i]=userLetterGuess;
            var elBlanks = document.getElementById('blanks');
            elBlanks.innerHTML = blanks;
        } else {
            lives --;
        }
    }//end of check guess function
     
    }
});
