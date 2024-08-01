import aic from '../assets/image/aic.jpg'
import abic from '../assets/image/abic.jpg'
import arunresume from '../assets/image/arunresume.pdf'
import au from '../assets/image/au.png'

import chetu from '../assets/image/chetu.jpg'
import chetuSkill from '../assets/image/chetuSkill.jpg'
import it from '../assets/image/it.jpg'
import html from '../assets/image/pngegg (1).png'
import css from '../assets/image/pngegg (2).png'
import js from '../assets/image/pngegg (3).png'
import react from '../assets/image/pngegg (4).png'
import node from '../assets/image/pngegg (5).png'
import bootstrap from '../assets/image/pngegg (6).png'
import mongodb from '../assets/image/pngegg (7).png'
const allImage = {
    html,css,js,react,node,bootstrap,mongodb
}
const navTabs = {
    home:'Home',
    about:'About',
    education:'Education',
    skill:'Skill',
    experience:'Experience',
    myTask:'My Tasks',
    contact:'Contact us',
    profile:'My Profile',
    programming:'Programming',
    Functionality:'Funcationality',
    css:'CSS Design',
}

export const aboutSection = {
    heading:'',
    subHeading:'',
    des:"",
    name:"",
    email:'',
    phone:"",
    email:'',
    experience:""
}
export const programming =[
    {
        ques:"Write a JavaScript function to convert a number from one base to another.",
        ansText:`function base_convertor(str,base1,base2){
                return parseInt(str,base1).toString(base2);
        }
        console.log(base_convertor(1000,2,8));
        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript function to convert a binary number to a decimal number.",
        ansText:`
        function btd(binery_num){
            return parseInt(binery_num,2)
        }
        console.log(btd(110011))
        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript function to convert a decimal number to a binary, hexadecimal or octal number.",
        ansText:`
        function mfn(num,str){
            if(str[0] == "B" || str[0] == 'b'){
                return parseInt(num.toString(2))
            }
            if(str[0] == "O" || str[0] == 'o'){
                return parseInt(num.toString(8))
            }
            if(str[0] == "H" || str[0] == 'h'){
                return parseInt(num.toString(16))
            }
            else{
                return "not a valid "
            }
        }
        console.log(mfn(120,'H'))
        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript function to generate a random integer.",
        ansText:`
        function randum(max,min){
    if(max == null && min == null){
        return 0
    }
    else{
        if(max == null){
            max = min;
        }
        return min + Math.floor(Math.random()*(max - min +1))
    }
}
console.log(randum(5, 8))
        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript function to format a number up to specified decimal places.",
        ansText:`
        function fn(num,size){
  return num.toFixed(size)
}
console.log(fn(2100, 2))

6. Write a JavaScript function to find the highest value in an array.
function hst(arr){
  let n = Number.NEGATIVE_INFINITY;
  arr.forEach((elem)=>{
    if(elem > n){
      n = elem;
    }
    
  })
  return n
}
console.log(hst([12,34,56,1]))

        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript function to find the lowest value in an array.",
        ansText:`
        function low(arr){
    let lowValue = Number.POSITIVE_INFINITY;
    arr.forEach((elem,ind)=>{
        if(elem < lowValue){
            lowValue =  elem
        }
    })
    return lowValue;
}
console.log(low(([-12,-34,0,-56,-1])))
        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.",
        ansText:`
        function fn(arr){
  let newarr = arr.sort((a,b)=>a - b);
  let i = newarr[0];
  while(i>0){
    if(newarr.every((elem)=>elem % i == 0)){
    return i
  }
  i--
  }
  
  
}
console.log(fn([3,15,9]))
        `,
        ansValue:''
        
    },{
        ques:" Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.",
        ansText:`
    function fn(arr){
  let big = Number.NEGATIVE_INFINITY;
  arr.forEach((elem)=>{
    if(elem > big){
      big = elem
    }
  })
  while(big < arr.reduce((elem)=>elem *=elem)){
  if(arr.every((elem)=>big % elem == 0)){
    return big
  }
  big++;
  }
}
console.log(fn([100,90,80,7]))
        `,
        ansValue:''
        
    },
    {
        ques:" Write a JavaScript function to test if a number is a power of 2.",
        ansText:`
   function fn(num){
  let numm = 2;
  while(numm < num){
    numm = Math.pow(numm,2);
  }
 return (numm === num) ? true : false;
}
console.log(fn(256))
        `,
        ansValue:''
        
    },
    {
        ques:" Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.",
        ansText:`
   function fn(arr){
  let big = Number.NEGATIVE_INFINITY;
  arr.forEach((elem)=>{
    if(elem > big){
      big = elem
    }
  })
  while(big < arr.reduce((elem)=>elem *=elem)){
  if(arr.every((elem)=>big % elem == 0)){
    return big
  }
  big++;
  }
}
console.log(fn([100,90,80,7]))
        `,
        ansValue:''
        
    },
    {
        ques:" Write a JavaScript function to test if a number is a power of 2.",
        ansText:`
   function fn(num){
  let numm = 2;
  while(numm < num){
    numm = Math.pow(numm,2);
  }
 return (numm === num) ? true : false;
}
        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript function to round a number to decimal place.",
        ansText:`
  function fn(num,n){
  return num.toFixed(n)
}
console.log(fn(10.49999,2))
        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript function to check whether a value is an integer or not.",
        ansText:`
function fn(num){
  return num == num.toFixed(0)
}
console.log(fn(235.235))

        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript function to calculate the product of values in an array.",
        ansText:`
function fn(arr){
  return arr.reduce((total,elem)=> total *= elem)
}
console.log(fn([100,-200,3]))
        `,
        ansValue:''
        
    },
    {
        ques:"Create a Pythagorean function in JavaScript.",
        ansText:`
function fn(a,b){
  return Math.pow(Math.pow(a,2) + Math.pow(b,2),0.5)
}
console.log(fn(2, 4))
        `,
        ansValue:''
        
    },
    {
        ques:"Write a JavaScript program to evaluate binomial coefficients.",
        ansText:`
function fn(a,b){
  let d = a-b;
  let val = 1;
  while(a > 1 || b > 1 || d > 1){
    val *= a/(b*d)
    a--
    if(b>1){
      b--;
    }
    if(d>1){
      d--
    }
  }
  return Math.round(val)
}
console.log(fn(10,2))
        `,
        ansValue:''
        
    },
]

