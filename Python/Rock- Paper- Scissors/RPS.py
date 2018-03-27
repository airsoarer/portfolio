import random

def get_score():
    score = 0
    return score


def get_random_number():
    randomNumber = random.randrange(1, 4)
    return randomNumber


def continue_game(score):
    score = int(score) + 1
    print("Your score is " + str(score))
    throwChocie = input("Choose: ROCK, PAPER, SICSSORS: ")
    print(throwChocie)

    if throwChocie == "ROCK" or throwChocie == "rock":
        ROCK(score)
    elif throwChocie == "PAPER" or throwChocie == "paper":
        PAPER(score)
    elif throwChocie == "SCISSORS" or throwChoice == "scissors":
        SCISSORS(score)

def ROCK(score):
    print("You chose ROCK")
    print("Ready... \n 3... \n 2... \n 1...")
    randomNumber = get_random_number()
    score = get_score()

    if randomNumber == 1:
        #tied
        computerThrow = "ROCK"
        print("The computer chose " + computerThrow)
        print("You tied")
        main_function()
    elif randomNumber == 2:
        #lost
        computerThrow = "PAPER"
        print("The computer chose " + computerThrow)
        print("You you lost")
        main_function()
    elif randomNumber == 3:
        #won
        computerThrow = "SCISSORS"
        print("The computer chose " + computerThrow)
        print("You won!")
        print("you score is now " + str(score))
        print("="*40)
        continue_game(score)


def PAPER(score):
    print("You chose PAPER")
    print("Ready... \n 3... \n 2... \n 1...")
    randomNumber = get_random_number()
    score = get_score()
    
    if randomNumber == 1:
        #won
        computerThrow = "ROCK"
        print("The computer chose " + computerThrow)
        print("You won!")
        print("you score is now " + str(score))
        print("="*20)
        continue_game(score)
    elif randomNumber == 2:
        #tied
        computerThrow = "PAPER"
        print("The computer chose " + computerThrow)
        print("You you tied")
        main_function()
    elif randomNumber == 3:
        #lost
        computerThrow = "SCISSORS"
        print("The computer chose " + computerThrow)
        print("You lost")
        main_function()


def SCISSORS(score):
    print("You chose SCISSORS")
    print("Ready... \n 3... \n 2... \n 1...")
    randomNumber = get_random_number()
    score = get_score()
    
    if randomNumber == 1:
        #lost
        computerThrow = "ROCK"
        print("The computer chose " + computerThrow)
        print("You lost")
        main_function()
    elif randomNumber == 2:
        #won
        computerThrow = "PAPER"
        print("The computer chose " + computerThrow)
        print("You you won!")
        print("you score is now " + str(score))
        print("="*40)
        continue_game(score)
    elif randomNumber == 3:
        #tied
        computerThrow = "SCISSORS"
        print("The computer chose " + computerThrow)
        print("You tied")
        main_function()


def main_function():
    print("Welcome to Rock, Papper, Scissors")
    throwChocie = input("Choose: ROCK, PAPER, SCISSORS: ")
    if throwChocie == "ROCK" or throwChocie == "rock":
        score = get_score()
        ROCK(score)
    elif throwChocie == "PAPER" or throwChocie == "paper":
        score = get_score()
        PAPER(score)
    elif throwChocie == "SCISSORS" or throwChocie == "scissors":
        score = get_score()
        SCISSORS(score)


main_function()        


    
