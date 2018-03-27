import random
library = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_"

def end():
    yesNo = input("Would you like to get another password? [Y/N]: ")

    if yesNo == "Y" or yesNo == "y":
        get_password()
    else:
        print("Goodbye")
        exit

def get_password():
    print("="*20)
    length = input("Enter the length of your password: ")
    length = int(length)
    
    password = " ".join(random.sample(library, length))
    print("You new password is: " + password)
    end()
    

def main_function():
    print("Welcome to the Passowrd Generator")
    typed = input("Type 'Get Password' to get a random password: ")

    if typed == "Get Password":
        get_password()
    else:
        print("Goodbye")
        exit

main_function()
