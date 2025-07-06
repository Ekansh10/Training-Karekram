def get_sum(a,b):
    return a+b

def print_name():
    print(__name__)

print("This is outside main")

if __name__ == '__main__': # the code after this statement will not be exported in the other files where it is imported
    print(get_sum(4,5))
    print_name()
    print("This is main of file1")