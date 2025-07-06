import file1 as md1

x = md1.get_sum(2,3)
print(x)

md1.print_name()

print(__name__)


## if we print the __name__ in the file itself it says __main__ and if we import the file and then print the imported file __name__ 