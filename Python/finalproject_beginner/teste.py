import random

a = 3
b = 4
c = random.randint(-4,4)


if c < -2:
    c = +
    print ("somar")
elif c > 2:
    print ("diminuir")
elif c >= -1 or c <= 1 :
    print ("dividir")
elif c == -2 or c == 2 :
    print ("multiplicar")

print(c)
