def evaluate():
    string = ["D", "B", "C", "A", "B", "A"]
    dictionary = {}
    found = False
   
    for x in string:
        if x in dictionary:
            print(x)
            return x
        elif x not in dictionary:
            print("not in", x)
            dictionary[x] = 1 
                
evaluate()

    
