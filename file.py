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

from math import sqrt
def divisors(n):
    v = [1]
    for i in range(2, int(sqrt(n))+1):
        if n%i == 0:
            v.extend([i,int(n/i)])
    return list(set(v))

print(len(divisors(5027)))

a = ['a','b']
b = ['a', 'b']

a = [1,2,3,4,5]
print(a)
a.sort(key= lambda x: -x)
print(a)