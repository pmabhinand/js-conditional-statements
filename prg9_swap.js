//w a pgm to swap 2 numbers
//n1=20 n2=30, n1=30 n2=20

n1=20
n2=30
temp=0

temp=n1

n1=n2

n2=temp

console.log('n1=',n1 ,'n2=',n2);


//without temp

n1=60
n2=40

n1=n1+n2
n2=n1-n2
n1=n1-n2

console.log(`final value of num1 and num2 ${n1} and ${n2}`);