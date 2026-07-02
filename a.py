a = int(input("Enter the first value: "))
b = int(input("Enter the second value:"))

rem = a%b

while rem!= 0:
    a = b
    b = rem
    rem = a%b
    print("Gretest common divisor is:  ",b)