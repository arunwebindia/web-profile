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
        
    }
]

