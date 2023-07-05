const show = (...args)=>{
   var sum=0;
   //console.log(typeof args)
   for(let i=0;i<args.length;i++){
    sum+=args[i];
   }
   return sum;
}
//arguments=
// console.dir(show); //function ke pass keya object hai wo show karta hai
// console.log(show(1,2,3,4,5,6));





















/**********************************typeof Function************************
 * 1.named Function //this is a global function call by anyone like window.functioName()
 * syntax
 *      function add(){
 *     console.log('i am named function')
 * }
 * 
 * 
 * 2.ananomyos function //only variable hoeist hota hai variable undefined ho jata hai
 * syntax -:
 *       var adder = function(){
 *       console.log('i am anonymous or fuction of Expression')
 * }
 * 
 * 
 * 3.
 * 
 * 
 *    
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/

function Calc(m){ //m is closer
     
    var add = function(x,y){
        return x+y;
    }
    var sub = function(x,y){
        return x-y;
    }
    var mul = function(x,y){
        return x*y;
    }
    var div = function(x,y){
        return x/y;
    }
   // return [add,sub,mul,div]  //return  array of function
   return {add,sub,mul,div}; //return object of function + lexical scope
}
var arr = Calc(100);
// console.log(arr);
// console.log(arr[0](10,5));
// console.log(arr[1](10,5));
// console.log(arr[2](10,5));
// console.log(arr[3](10,5));

// console.log(arr)
// console.log(arr.add(12,23))
// console.log(arr.sub(32,12))
// console.log(arr.mul(12,3))
// console.log(arr.div(12,7))

//que.1 - lexical scope or  closer
//que.2 - couter to increase value by 1




function counter(){
    let count=0;
    const incCount=()=>++count;
        
    
    return {incCount};
}
// var a = counter();
// console.log(a.incCount());
// console.log(a.incCount());
// console.log(a.incCount());







//callback function
/*
// function evenOdd(num){
//     return num%2==0?"even No"+num: "Odd No" +num;
// }
// function cube(num){
//     return Math.pow(num,3);
// }

// function loop(n,fn){
//     for(var i=0;i<n;i++){
//         console.log(fn(i));
//     }
// }
// loop(5,evenOdd);

// loop(5,cube);
*/








//map function if we want to make clone or copy then use map
// var arr = [1,23,5,6,7,8];

// var a = arr.map((element)=>{
//       return element+element*0.18;
// })
// console.log(a);











//question
//.Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
// 3==multiply, 4==divide ).Don`t use switch statement or if else statements
 
// 1.add,
// 2.subtract,
// 3.multiply,
// 4.divide 

// write the calc function for all the operations

// var add = (x,y)=>{
//     return x+y;
// }
// var subtract = (x,y)=>{
//     return x-y;
// }
// var multiply = (x,y)=>{
//        return x*y;
// }
//  var divide= (x,y)=>{
//     return x/y;
// }

// function cal(x,y,fn){
     
//     return fn(x,y);
// }

// console.log("add =",cal(10,4,add));
// console.log("sub=",cal(10,4,subtract));
// console.log("mul=",cal(10,4,multiply));
// console.log("div",cal(10,4,divide));

function cal(){
    var add = (x,y)=>{
        return x+y;
    }
    var sub = (x,y)=>{
        return x-y;
    }
    var mul = (x,y)=>{
        return x*y;
    }
    var div = (x,y)=>{
        return x/y;
    }
  return {add,sub,mul,div};
}
//console.log("que1");
// var a = cal();
// console.log(a.add(10,4))
// console.log(a.sub(10,4))
// console.log(a.mul(10,4))
// console.log(a.div(10,4))







// //que2.. Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.


// Output:
// "true" if the triangle is equilateral and "false" if its not.

let isEquilateral = (x,y,z)=>{
    if(x==y && y==z && x==z)
      return `True`;
    return `false`;
}

function check(x,y,z,fn){
    return fn(x,y,z);
}
//console.log("que2");
//console.log(check(2,2,2,isEquilateral));



//que3
// check anagram

// var map = new Map();

// var s = "deepaksingh";
// for(let i=0;i<s.length;i++){
//        map.set(s[i],0);
// }
// for(let i=0;i<s.length;i++){
//     let k = map.get(s[i]);
//     map.set(s[i],k+1);
// }
// console.log(map)

function isAnagram(str1,str2){
if(str1.length!=str2.length)
     return `${str1} is an anagram of ${str2}`
     
var map = new Map();
for(let i=0;i<str1.length;i++){
    map.set(str1[i],0);
}

for(let i=0;i<str1.length;i++){
    let k = map.get(str1[i]);
    map.set(str1[i],k+1);
}

for(let i=0;i<str2.length;i++){
    if(!map.has(str2[i])){
        return `${str1} is an anagram of ${str2}`
    }
}
return `${str1} is an anagram of ${str2}`;
}
var str1="Army";
var str2="Mary"
//console.log(isAnagram(str1,str2));






// 4. Create a function Employee, having id, name, basic_Salary as arguments.

// Compute HRA, DA, TA, GS, NS.

// HRA is 30% of Basic Salary.
// DA is 10% of Basic Salary.
// TA is 20% of Basic Salary.

// GS = Basic Salary + HRA + DA + TA;

// TAX DEDUCTION is 10% of GS.

// NS = GS - TAX DEDUCTION.

// NOte : Use Basic Salary in Lexical Scope 
// Print salary slip of the employee.

function Employee(basic_Salary){
    
    const HRA = ()=> 0.3*basic_Salary;
    const DA = ()=> 0.1*basic_Salary;
    const TA = ()=> 0.2*basic_Salary;
    const GS = ()=> basic_Salary+HRA()+DA()+TA();
    const TD = ()=> 0.1*GS();
    const NS = ()=> GS()-TD();

    return{HRA,DA,TA,GS,TD,NS};

}

// let Slip = Employee(100);
// console.log(Slip);
// console.log(`HRA = ${Slip.HRA()}`) 
// console.log(`DA = ${Slip.DA()}`) 
// console.log(`TA = ${Slip.TA()}`) 
// console.log(`GS = ${Slip.GS()}`) 
// console.log(`TD = ${Slip.TD()}`) 
// console.log(`NS = ${Slip.NS()}`) 





// 15. Write a function to find the maximum and minimum elements in an array.
// arr = [10,3,15,-1,9,6]

// output = maxno. : 15
// 			minno. : -1

let maximum = (x,y)=> x>y?x:y;
let minimum = (x,y)=> x<y?x:y;
let findMaxMin=(arr)=>{
     if(arr.length==1){
        return [arr[0],arr[0]];
     }
     let maxi=arr[0];
     let mini=arr[0];
     for(let i=1;i<arr.length;i++){
         maxi = maximum(maxi,arr[i]);
         mini = minimum(mini,arr[i]);
     }
     return [maxi,mini];
}


arr = [10,3,15,-1,9,6];
var ans = findMaxMin(arr);
//console.log(ans);
console.log(`Maximum = ${ans[0]} Minimum = ${ans[1]}`);


