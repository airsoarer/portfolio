
print("Welcome to the classic Magic 8 Ball")

def game():
    play = input("Would you like to play? Y/N")
    while play == "Y" or "y":
        import random
        random = random.randrange(20)
        question = input("Ask me a question: ")
        print(question)
        if random == 0:
            print("Signs point to yes")
        elif random == 1:
            print("Yes")
        elif random == 2:
            print("Replay hazy, try again")
        elif random == 3:
            print("Without a dought")
        elif random == 4:
            print("My sources say no")
        elif random == 5:
            print("As I see it, yes")
        elif random == 6:
            print("You may rely on it")
        elif random == 7:
            print("Concentrate and ask again")
        elif random == 8:
            print("Outlook not so good")
        elif random == 9:
            print("It is decidedly so")
        elif random == 10:
            print("Better not tell you now")
        elif random == 11:
            print("Very doubtful")
        elif random == 12:
            print("Yes - definitely")
        elif random == 13:
            print("It is certain")
        elif random == 14:
            print("Cannot predict right now")
        elif random == 15:
            print("Most likley")
        elif random == 16:
            print("Ask again later")
        elif random == 17:
            print("My reply is no")
        elif random == 18:
            print("Outlook good")
        elif random == 19:
            print("Don't count on it")
        play = input("Want to ask another question? Y/N: ")
        if play == "Y" or "y":
            game()
        break
game()
    
        



