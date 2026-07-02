a = float(input("what number would square root"))
squ_root = a%2
for i in range (0,10):
    squ_root = (0.5*(squ_root+(a/squ_root)))
    print(squ_root)
 
