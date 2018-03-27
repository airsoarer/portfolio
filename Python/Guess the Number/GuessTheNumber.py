import random

randomNumber = random.randrange(0, 11)
randomNumberTwo = random.randrange(0, 21)
randomNumberThree = random.randrange(0, 51)

def guess_again(turns, function, randomNumber):
    if turns > 0:
        guess = input("guess again: ")
        check(guess, function, turns)
    elif turns == 0:
        randomNumber = str(randomNumber)
        print("The awnser is " + randomNumber)
        print("you have no more guesses left")
        main_function()

def zero_to_fifty(turns):
    function = 50
    turns = 10
    print("You passed 0-20, great job! Now it is time for 0-50")
    print("This time around, you will have 10 tries")
    guess = input("Guess a number between 0 and 50: ")
    check(guess, function, turns)

def zero_to_twenty(turns):
    function = 20
    turns = 5
    print("You passed 0-10, now it is time for 0-20")
    print("Don't worry, you will have 5 tries this time around.")
    guess = input("Guess a number between 0 and 20: ")
    check(guess, function, turns)

def check(guess, function, turns):
        guess = int(guess)
        if function == 10:
            function = 10
            if guess == randomNumber:
                print("You are correct, time for the next level")
                zero_to_twenty(turns)
            elif guess < randomNumber:
                print("Higher")
                turns = turns - 1
                guess_again(turns, function, randomNumber)
            elif guess > randomNumber:
                print("lower")
                turns = turns - 1
                guess_again(turns, function, randomNumber)
        elif function == 20:
            function = 20
            if guess == randomNumberTwo:
                print("You are correct, time for the next level")
                zero_to_fifty(turns)
            elif guess < randomNumberTwo:
                print("Higher")
                turns = turns - 1
                guess_again(turns, function, randomNumberTwo)
            elif guess > randomNumberTwo:
                print("lower")
                turns = turns - 1
                guess_again(turns, function, randomNumberTwo)
        elif function == 50:
                function = 50
                #This is working
                if guess == randomNumberThree:
                    print("You are correct, you have won the game!!!!")
                    again = input("Would you like to play again [Y/N]: ")
                    if again == "Y" or "y":
                        main_function()
                    elif again == "N" or "n":
                        print("Goodbye")
                elif guess < randomNumberThree:
                    print("Higher")
                    turns = turns - 1
                    guess_again(turns, function, randomNumberThree)
                elif guess > randomNumberThree:
                    print("Lower")
                    turns = turns - 1
                    guess_again(turns, function, randomNumberThree)

def main_function():
    function = 10
    turns = 3
    print("Welcome to the Number Guesser!")
    print("You have 3 trys")
    guess = input("Guess a number between 0 and 10: ")
    #guess = int(guess)
    check(guess, function, turns)



main_function()

