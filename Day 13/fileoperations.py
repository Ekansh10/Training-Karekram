with open("abc.txt", 'w') as f:
    # overwrite
    f.write("This is line 1 \n")
    f.write("This is line 2 \n")
    f.write("This is line 3 \n")
    

with open("abc.txt", 'r') as f:
    print(f.read())
    f.seek(10) # skips n bytes,  1 byte = 1 char
    print(f.readlines()) # returns list of lines

with open("abc.txt", 'r+') as f: # read behaviour but write at the eof
    print(f.readline())
    print(f.readline())
    f.write("This line is from r+ mode\n") # write data at the end of the file
    print(f.read()) # blank ouytput since the file pointer was at the end after write()


with open("xyz.txt", 'w+') as f: # this will blank the file first and then write
    # replaced the old content
    print(f.read())
    f.write("This line is from w+")
    print(f.read())
    f.seek(0) # this will take the file pointer at the oth byte
    f.write("###") #This will start replacing the bytes from the location of the file pointer
    f.seek(0)
    print(f.read()) 
    print(f.read()) # here nothing will be read as the fp will be at the eof
# read write append mode

with open("xyz.txt", 'a+') as f: # this will blank the file first and then write
    # replaced the old content
    print(f.read())
    f.write("This line is from w+")
    print(f.read())
    f.seek(0) # this will take the file pointer at the oth byte
    f.write("###") #This will start replacing the bytes from the location of the file pointer
    f.seek(0)
    print(f.read()) 
    print(f.read()) # here nothing will be read as the fp will be at the eof