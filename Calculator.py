username = "Student"
password = "password"

def main():
    login_Screen();

def login_Screen():
    loginmsg = print("Hi, please enter your username and password")
    usernm = input('Username: ')
    if (usernm == username):
        print("Welcome, "+ username +" Please enter your password.")
    elif (usernm == "A"):
        print("Welcome Administrator")
        Selection();
    else:
        print("Incorrect Username, please try again.")
        login_Screen();
    paswd = input('Password: ')
    if (paswd == password):
        Selection();
    else:
        print('Incorrect password, please try again.')
        login_Screen();

def Selection():
    print("Welcome to my calculator! Here are the operations. \n -------------------------------- \n 1 - Addition \n 2 - Subtraction \n 3 - Division \n 4 - Multiplication")
    operation = int(input('Which operation do you wish to use?: '))
    Select_Values(operation);

def Select_Values(operation):

    switcher = {
        1: Addition,
        2: Subtraction,
        3: Division,
        4: Multiplication
    }

    func = switcher.get(operation, "Invalid Operation");
    if (func == "Invalid Operation"):
        Selection();
    else:
        return func();

def Addition():
    num1 = int(input('What is your first value?: '))
    num2 = int(input('What is your second value?: '))
    sum = num1 + num2
    print('The sum of your values is '+ str(sum))

def Subtraction():
    num1 = int(input('What is your first value?: '))
    num2 = int(input('What is your second value?: '))
    difference = num1 - num2
    print('The difference of your values is '+ str(difference))

def Division():
    num1 = int(input('What is your first value?: '))
    num2 = int(input('What is your second value?: '))
    quotient = num1 / num2
    if (num1 == 0) or (num2 == 0):
        print("You cannot divide by 0! Input your values again.")
        Division();
    else:
        print('The quotient of your values is ' + str(quotient))

def Multiplication():
    num1 = int(input('What is your first value?: '))
    num2 = int(input('What is your second value?: '))
    product = num1 * num2
    print('The product of your values is ' + str(product))

if __name__ == "__main__":
    main();
