# Word-Guess-Game

a.  Create a list of Christmas themed words (in an array) that can be chosen by the computer to start the game

b.  Add a winner picture and song that that plays/shows when game is won

c.  Randomly choose one of these words to be the current word in the current game

d.  Turn the word into an array that can be looped through.

e.  Create a new variable with matching blank lines in place of the letters to display on page

f.  Create variable to hold number of guesses remaining and set to 10.  Display on page.

g.  Display alphabet bank

h.  Create variable to hold wins and losses and set each to 0.  Display on page.

i.  Game starts when User presses a key which is displayed in a box on page.  Create variable to hold this key.

j.  Check if any of the letters in the current word matches the key pressed

    A.  If YES (letter is in word):
        1.  erase guessed letter from alphabet bank  
        2.  replace blank line with the guessed letter and display on page
        3.  After new letter is added to current word, check if all empty lines have now been filled in

            A.  If YES (all blanks filled in): 
                1.  Display message on page saying "You win!"
                2.  Add 1 to the amount stored in "wins"
                3.  Play a song and show picture 
                4.  Reset the game by to start from the beginning (but don't reset wins/losses score)
                        1.  clearing the current word
                        2.  display entire alphabet
                        3.  clear the picture
                        4.  end the song
                        5.  set lives back to 10
    
            B.  If NO (still empty lines): 
                1.  Go back to collecting user key and checking this guess

    B.  If NO (letter is not in word):
        1.  erase guessed letter from alphabet bank
        2.  subtract 1 from the amount of guesses remaining ("lives")
        3.  Check to see if the number of guesses remaining is 0.
            A.  If NO (1 or more guesses remaining):
                1. Go back to collecting user key and check the new guess
            B.  If YES (0 guesses remaining):
                1.  Display message saying game over
                2.  Add 1 to the amount stored in "losses"
                4.  Reset the game by to start from the beginning (but don't reset wins/losses score)
                        1.  clearing the current word
                        2.  display entire alphabet
                        3.  clear the picture
                        4.  end the song
                        5.  set lives back to 10


OTHER:

"Start Over" button that refreshes the page and sets wins and losses to 0.



    











