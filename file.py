def my_sum(a,b):
    return a+b

print(my_sum(3,-44)) # Hay que correr la funcion cada ocacion


def fan(str):
    A = str2.split(', ')
    H = {}
    for x in A:
        H[x[0]] = int(x[-1])
    return H

print(fan("a=1, b=2, c=3, d=4"))