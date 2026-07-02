n = int(input("Enter total no of prime numbers:"))
prime = []
begin = 2

while len(prime) != n :
     for i in range (2 ,begin // 2+1):
         if begin % i == 0:
            break
     else:
        prime.append(begin)

     begin+= 1
print("list of first",n ,"prime numbers are:",prime)