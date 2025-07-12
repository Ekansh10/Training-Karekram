try:
    a = int(input("Enter a nuber: "))
    print(a)
    # with open('sdfc.txt', 'r') as f: # comment this to see the else block running
    #     print(f.read())
except ValueError as e:
    print(e)
except FileNotFoundError as e: # here only one except statement will work
    print(e)
else: # if no error in the try block 
    print("Else Block ", a+10)
finally: # execute in both the cases even if the exception occurs or not
    print("Finaaly ")

print("After try-except block")