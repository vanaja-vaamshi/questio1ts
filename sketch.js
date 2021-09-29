var count = 0;
var number = 12;
var lastdigit;
var reverse = 0;
var sum;
var count = 0;






  


 while(number != 0){
  lastdigit = number%10;
  reverse = (reverse*10) + lastdigit;
  number = Math.floor(number/10);
    
  }
  console.log(reverse)

sum = number + reverse;
if(sum % 2 == 0){
  console.log( "is  not reversible");
  
}
else{
  console.log(" is reversible");
  count = count +1;    
  console.log(count)
}


