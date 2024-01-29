//w a p to check whether a given number is positive or negative

num=10
if(num>0){
    console.log('positive');
}
else if(num==0){
    console.log('neither positive nor negative');
}
else{
    console.log('negative');
}


//ternary

console.log(num>0?'positive':num==0?'neither positive nor negative':'negative' );