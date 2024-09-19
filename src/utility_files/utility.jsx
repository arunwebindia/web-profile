import aic from '../assets/image/aic.jpg'
import abic from '../assets/image/abic.jpg'
import au from '../assets/image/au.png'
import knit from '../assets/image/knit.jpeg'
import html from '../assets/image/pngegg (1).png'
import css from '../assets/image/pngegg (2).png'
import js from '../assets/image/js.png'
import rct from '../assets/image/pngegg (4).png'
import node from '../assets/image/pngegg (5).png'
import boot from '../assets/image/pngegg (6).png'
import mongo from '../assets/image/pngegg (7).png'
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const nav =[
  {
    navname:"HOME",
    path:'/'
  },
  {
    navname:"ABOUT",
    path:'/about'
  },
  {
    navname:"JAVASCRIPT",
    path:'/task'
  },
  {
    navname:"CSS",
    path:'/css'
  },
  {
    navname:"PROJECTS",
    path:'/project'
  },
  {
    navname:"CONTACT US",
    path:'/contact'
  }
];
export const social_media =[
  {
    href:'https://www.facebook.com/hgsarun',
    icon:<FacebookIcon />
  },
  {
    href:'https://www.linkedin.com/in/hgsarunsingh/',
    icon:<LinkedInIcon />
  },
  {
    href:'https://t.me/arunwebindia',
    icon:<TelegramIcon />
  },
  {
    href:'https://github.com/arunwebindia',
    icon:<GitHubIcon />
  }
]

export const education_obj = [
  {
    collegeImage: aic,
    education: 'High School',
    college: 'Adarsh inter college mahuabagh ghazipur uttar pradesh.',
    percentage: "64%"
  },
  {
    collegeImage: abic,
    education: 'Intermediate',
    college: 'Angelo Bengali Inter College Civil Line Prayagraj Uttar Pradesh',
    percentage: "70%"
  },
  {
    collegeImage: au,
    education: 'B.SC',
    college: 'University of Allahabad prayagran Uttar Pradesh',
    percentage: "50%"
  },
  {
    collegeImage: knit,
    education: 'MCA',
    college: 'Kamla Nehru Institute of Technology Sultanpur Uttar Pradesh',
    percentage: "86%"
  }
]

export const skillObj=[
  {
    src:html,
    name:'HTML',
    progress:'90%'
  },
  {
    src:css,
    name:'CSS',
    progress:'90%'
  },
  {
    src:boot,
    name:'BOOTSTRAP',
    progress:'90%'
  },
  {
    src:js,
    name:'JAVASCRIPT',
    progress:'90%'
  },
  {
    src:rct,
    name:'REACTJS',
    progress:'90%'
  },
  {
    src:node,
    name:'NODE',
    progress:'90%'
  },
  {
    src:mongo,
    name:'MONGO',
    progress:'90%'
  },
]

export const programming = [
  {
    ques: "Write a JavaScript function to convert a number from one base to another.",
    ansText: `function base_convertor(str,base1,base2){
                return parseInt(str,base1).toString(base2);
        }
        console.log(base_convertor(1000,2,8));
        `,
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to convert a binary number to a decimal number.",
    ansText: `
        function btd(binery_num){
            return parseInt(binery_num,2)
        }
        console.log(btd(110011))
        `,
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to convert a decimal number to a binary, hexadecimal or octal number.",
    ansText: `
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
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to generate a random integer.",
    ansText: `
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
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to format a number up to specified decimal places.",
    ansText: `
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
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to find the lowest value in an array.",
    ansText: `
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
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.",
    ansText: `
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
    ansValue: ''

  }, {
    ques: " Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.",
    ansText: `
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
    ansValue: ''

  },
  {
    ques: " Write a JavaScript function to test if a number is a power of 2.",
    ansText: `
   function fn(num){
  let numm = 2;
  while(numm < num){
    numm = Math.pow(numm,2);
  }
 return (numm === num) ? true : false;
}
console.log(fn(256))
        `,
    ansValue: ''

  },
  {
    ques: " Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.",
    ansText: `
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
    ansValue: ''

  },
  {
    ques: " Write a JavaScript function to test if a number is a power of 2.",
    ansText: `
   function fn(num){
  let numm = 2;
  while(numm < num){
    numm = Math.pow(numm,2);
  }
 return (numm === num) ? true : false;
}
        `,
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to round a number to decimal place.",
    ansText: `
  function fn(num,n){
  return num.toFixed(n)
}
console.log(fn(10.49999,2))
        `,
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to check whether a value is an integer or not.",
    ansText: `
function fn(num){
  return num == num.toFixed(0)
}
console.log(fn(235.235))

        `,
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to calculate the product of values in an array.",
    ansText: `
function fn(arr){
  return arr.reduce((total,elem)=> total *= elem)
}
console.log(fn([100,-200,3]))
        `,
    ansValue: ''

  },
  {
    ques: "Create a Pythagorean function in JavaScript.",
    ansText: `
function fn(a,b){
  return Math.pow(Math.pow(a,2) + Math.pow(b,2),0.5)
}
console.log(fn(2, 4))
        `,
    ansValue: ''

  },
  {
    ques: "Write a JavaScript program to evaluate binomial coefficients.",
    ansText: `
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
    ansValue: ''

  },
  {
    ques: " Write a JavaScript function to do currency math (add, subtract, multiply, divide etc.).",
    ansText: `
  function fn(m,n){
  return {
    plus:+m.toString().replace("$",0) + (+n.toString().replace("$",0)),
    minus:+m.toString().replace("$",0) - (+n.toString().replace("$",0)),
    mult:+m.toString().replace("$",0) * (+n.toString().replace("$",0)),
    divide: +m.toString().replace("$",0) / (+n.toString().replace("$",0)),
  }
}
console.log(fn("$40.24","$21.57"));

        `,
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to calculate the nth root of a number.",
    ansText: `
      function fn(num,root){
        return Math.pow(num,1/root)
      }
      console.log(fn(64, -2))

      `,
    ansValue: `
      console.log(nthroot(64, 2));
      8
      console.log(nthroot(64, -2));
      0.125
      `

  },
  {
    ques: "Write a JavaScript function to round up an integer value to the next multiple of 5.",
    ansText: `
function fn(num){
  while(num % 5 != 0){
    num++
  }
  return num
}
console.log(fn(137))


    `,
    ansValue: `console.log(int_round5(32));
35
console.log(int_round5(137));
140`

  },
  {
    ques: "Write a JavaScript function to convert an angle from degrees to radians.",
    ansText: `
    function fn(deg){
  return ((Math.PI/180)*deg)
}
console.log(fn(45))
function fnn(rad){
  return (180/Math.PI)*rad
}
console.log(fnn(0.7853981633974483))
  `,
    ansValue: `
    console.log(degrees_to_radians(45));
0.7853981633974483

    `

  },
  {
    ques: "Write a JavaScript function to return powers of two values.",
    ansText: `
    function fn(num){
  while(num % 2 == 0){
    if(num == 2){
      return true;
    }
    else{
      num = num / 2;
    }
    
  }
  return false;
}
console.log(fn(128))
  `,
    ansValue: `
    console.log(isPower_of_two(64));
true
console.log(isPower_of_two(94));
false
    `

  },
  {
    ques: " Write a JavaScript function to check if a number is a whole number or has a decimal place.",
    ansText: `
function fn(num){
 if(num.toFixed(0) == num){
   return true
 }
 else{
   return false;
 }
}
console.log(fn(128.678))
  `,
    ansValue: `
    Note : Whole Numbers are simply the numbers 0, 1, 2, 3, 4, 5, ... (and so on). No Fractions!
Test Data :
console.log(number_test(25.66));
"Number has a decimal place."
console.log(number_test(10));
"It is a whole number."
    `

  },
  {
    ques: "Write a JavaScript function to print an integer with thousands separated by commas.",
    ansText: `
    function fn(num){
let fractionnum = num.toString().split('.');
let numm = Math.trunc(num).toString().split('').reverse();
for(let i = 3; i < numm.length; i=i+4 ){
  numm.splice(i,0,',')
}
console.log(numm.reverse().join("") + "." +fractionnum[1])
}
fn(300354354004.8);
  `,
    ansValue: ''

  },
  {
    ques: "Write a JavaScript function to get all prime numbers from 0 to a specified number.",
    ansText: `
    function fn(num){
  let flag = false;
  let n = 2;
  let arr =[]
  while(n <= num){
    
    for(let i = 2;i < n;i++){
      if(n % i == 0){
        flag = true;
        
      }
      
    }
    
    if(!flag){
      arr.push(n)
    }
  n++
  flag = false
  }
  return arr;
}
console.log(fn(13))
  `,
    ansValue: `
    console.log(primeFactorsTo(5));
[2, 3, 5]
console.log(primeFactorsTo(15));
[2, 3, 5, 7, 11, 13]

    `
  }
]

