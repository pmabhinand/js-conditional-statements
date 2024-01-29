//w a p to print the second largest among three numbers and arrange them in descending order

num1=20
num2=35
num3=10

if(num1>num2 && num1>num3){
      if(num2>num3){
        console.log(`${num2} is the second largest number`);
        console.log(`descending order ${num1} ${num2} ${num3}`);
      }
      else{
        console.log(`${num3} is the second largest number`);
        console.log(`descending order ${num1} ${num3} ${num2}`);
      }
    }
 else if(num2>num1 && num2>num3){
      if(num1>num3){
        console.log(`${num1} is the second largest number`);
        console.log(`descending order ${num2} ${num1} ${num3}`);
      }
      else{
        console.log(`${num3} is the second largest number`);
        console.log(`descending order is ${num2} ${num3} ${num1}`);
      }
 } 
 else if(num3>num1 && num3>num2){
         if(num1>num2){
            console.log(`${num1} is the second largest number`);
            console.log(`descending order is ${num3} ${num1} ${num2}`);
         }
         else{
          console.log(`${num2} is the second largest number`);
          console.log(`descending order is ${num3} ${num2} ${num1}`);
         }
 }  
 else{
  console.log(`all numbers are equal`);
 }     