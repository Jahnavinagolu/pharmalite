a = list()
n = int(input("Enter total no of items:"))
for i in range (n):
    a.append(int(input("Enter a value"+str(i+1)+" ")))
    if len(a) == 0:
        print("list is empty")
    else:
        print("given list =",a)
        print("max value",max(a))