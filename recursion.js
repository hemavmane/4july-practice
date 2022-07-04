// function evenDigits(n){

   
//     if(n==0){
//       return "0"
//     }else{
//       let str = "";
//       let digit;
//       while(n!= 0){
//       digit = n%10;
//       n = Math.floor(n/10);
//       if(digit%2==0){
//           str = `${digit}${str}`;
//       }
//     }
//     return str == ""?"-1":str;
      
//     }
    
//   }
  
//   console.log(evenDigits(72346));
  

// function palin(num){
//     let rev;
//     let temp= num;
//     let sum = 0;
//     while(num!=0){
//         rev = num%10;
//         sum= sum+rev*10;
//         num = Math.floor(num/10);
//     }
//     console.log(sum)
//     if(sum===temp)
//     {
//         return "pallindrome"
//     }
//     // return "not pallindrom"
// }console.log(palin(121))

// function evenDigits(n){
//     if(n==0){
//       return "0"
//     }else{
//       let str = "";
//       let digit;
//       while(n!= 0){
//       digit = n%10;
//       n = Math.floor(n/10);
//       if(digit%2==0){
//           str = `${digit}${str}`;
//       }
//     }
//     return str == ""?"-1":str;
//     }
//   }
//   console.log(evenDigits(72346));