//type of :- is not a function it is operator
//object store in heap
//function se object banta hai

// var a = new Number(100);
// console.log(typeof a);
// console.log(a);
// console.log(a instanceof Number)

//when we make object with var keyword then it is hoeist at top

// var obj = {
//     add(){
//       console.log("i am the obj add");
//     }
// }

// obj.add();
// Window.obj.add(); //it support in the browser

//function recive n arguments
//NaN==NaN  false NaN means error
const one = ()=>{
    return 1;
}
const five = ()=>{
    return 5;
}
function add(){
    // console.log(arguments.length);
    var  sum = 0;
    for (var i=0; i<arguments.length;i++){
        //sum+=arguments[i]; if all are numeric type
        // sum += parseInt(arguments[i]); //if arguments had string number type
        if(typeof arguments[i] == 'function' ){
            arguments[i] = arguments[i] ();
        }
        sum=sum+(isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
      
    }
    return sum;
}
// add();
// console.log(add(1,2,3,45,67,7)); //output = 125
// console.log(add(1,2,3,45,"67",7)); //output = 51677 concatenate

// console.log(add(1,2,3,45,"67",7));//output = 125
// console.log(add(1,2,33,5,'ram',5,7)); //output = NaN
// console.log(add(1,2,4,5,"ram","5")); //output = 17  sum=sum+(isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));

//if we pass function as arguments

// console.log(add(1,2,3,5,one,five,"ram","5")); //output=16

//to handle function console.log(add(1,2,3,5,one,five,"ram","5")); //output=22
      

//falsy = NaN,0,undefined,'',etc;
//truthy = number = 1,2,3,44,6;

// const adder = (x=0,y=0)=>{
//     return x+y;
// }

// console.log(adder()); // 0
// console.log(adder(10));  //10
// console.log(adder(10,20)); //30
// console.log(adder('',56)); //56
// console.log(adder('','')); // 

// function show(...args){  //it handel n argument its make array of args

// }

//function show(x=0,y,...args)  //after two arguments it make array of args


//difference arguments vs ...args(Rest) rest always use in function arguments
//duifference between rest vs spread

//assignment


function que1(nums){
     var  n = nums;
     var count=0
     var flag = false;
     var evenSum=0;
     var oddSum=0;

     while(n!=0){
         count++;
         n=parseInt(n/10);

     }
     if(count%2!=0){
        flag=true;
     }
     while(nums!=0){
        if(flag==false){
            evenSum += parseInt(nums%10);
            flag=true;
            nums=parseInt(nums/10);
        }
       else{
          oddSum+= parseInt(nums%10);
          flag=false;
          nums=parseInt(nums/10);
       }
     }
    console.log(`evenSum =  ${oddSum}, oddSum = ${evenSum} `);
}

//que1(2914);

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : ‘learn javascript from brain mentors’
// Expected Output : ‘Learn Javascript From Brain Mentors

function ques2(){
    let str = 'learn javascript from brain mentors';
    let arr = str.split(" ");
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var str2 = arr.join(' ');
    console.log(str2);
}


//ques2();

// Write a JS Function to validate Phone Number 
// Only number and must be 10 digit long
function ques3(){
     var number = prompt('enter the phone number');
    //  var number = '1233455dfg' 
     var flag = false;
     var num;
     if(number.length==10){
        for(var i = 0;i<number.length;i++){
             num = parseInt(number[i]);
            if(isNaN(num)){
              flag=true;
              break;
            }
        }
       // console.log(num);
        if(flag==true)
        alert('Invalid');
    else{
        alert('valid');
    }
     }
     else{
        //alert('invalid');
        alert('invalid')
     }
}
//ques3();

// var str= 'r';
// var n = parseInt(str[0]);
// console.log(n);






//Que4 Write a JS Function to validate Email Address
// Must contains @
// Must ends with .com/.org/.edu
function que4(){
    var email = "deepakh73850@gmail.com";
    var n = email.length;
    if(n<=10){
        console.log('Inavaild String');
          return;
    }
    
    var r = n-10;
    var result = email.slice(r,n);
    if(result=="@gmail.com" || result=="@gmail.org" || result=="@gmail.edu"){
        console.log("Valid");
    }
    else{
        console.log("email is inavaild");
    }

}
//que4();





// Write a JS Function to find the occurrence of each character in JS
// Input : “brain mentors”
// O/P : b 1
// r 2
// A 1
// I 1
// N 2
// M 1
// E 1
// T 1
// O 1
// S 1

let find = (str)=>{
    let map = new Map();
    for(let i=0;i<str.length;i++){
        map.set(str[i],0);
    }
    for(let i=0;i<str.length;i++){
        let value = map.get(str[i]);
        map.set(str[i],value+1);
    }
    console.log(map);
}
find("brain mentors");