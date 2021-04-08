import math
print('what is your A ,B and your C?')

A = int(input('Your A is:'))
B = int(input('Your B is:'))
C = int(input('Your C is:'))

X1 = (-(B) - math.sqrt((B) ** 2 - 4 * (A) * (C))) / 2 * (C)
X2 = (-(B) + math.sqrt((B) ** 2 - 4 * (A) * (C))) / 2 * (C)
print('Your roots/X intercepts are '+str(X1)+' and '+str(X2)+'.')
