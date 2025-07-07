with open("abc.txt", 'w') as f:
    # overwrite
    f.write("This is line 1 \n")
    f.write("This is line 2 \n")
    f.write("This is line 3 \n")
    

with open("abc.txt", 'r') as f:
    print(f.read())
    f.seek(10) # skips n bytes,  1 byte = 1 char
    print(f.readlines()) # returns list of lines


# read write append mode