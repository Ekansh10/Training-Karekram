# yield is used to convert function to generator
# yield is like the return statement without breaking

# infinite generator
# def mygen():
#     i = 0
#     while(True):
#         yield(i)
#         i += 1

# gen = mygen()
# while(True):
#     print(next(gen))

def customRange(n1, n2, s):
    while(n1 < n2):
        yield(n1)
        n1 += s

for i in customRange(1, 2.1, 0.1):
    print("{:.2f}".format(i))