// // // let prompt = require('prompt');
// // // prompt.start();
// // //self invoking function
// // //write code in paraenthesis()
// // //if we want to call function only one time then we use it
// // //ifee
// // var t = (function(){
// //     var c = 0;
// //     var myCount=()=>{
// //         c++;
// //         return c;
// //     }
// //     return myCount;
    
// // })();

// // // console.log(t());
// // // console.log(t());
// // // console.log(t());
// // // console.log(t());
// // // console.log(t());
// // // async function takeinput(){ 
// // // var a = await prompt.get('enter the number');
// // // var b = await prompt.get('enter the number');
// // // var a1 = parseInt(a);
// // // var b1 = parseInt(b);
// // // return {a1,b1};
// // // }

// // // var a = takeinput();
// // // console.log(a);
// // // var a;
// // // var b;
// // // prompt.get(['a', 'b'], function (err, result){
// // // console.log('Command-line input received:');
// // //     console.log('  username: ' + result.a);
// // //     console.log('  email: ' + result.b);
// // // })



// // //arrow function
// // //if it had only 1 argument then not need to paranthesis

// // //const does not allow reasign
// // // Best Practices
// // // 1.IIFE - One time Invocation (During Construction)
// // // 2.closure - make things private,some thing public (return+lexical scope)
// // // 3.HOF-Higher order function - when function recive function as arguments or
// // // function return another function.both





// // //HOF 
// // // fn is callback fn
// // // loop is a hof

// // // const evenOdd = num=>num%2==0?"even "+num:"Odd"+num;
// // // const cube = num=>num**3;

// // // function loop(n,callback){
// // //     for(let i=0;i<n;i++){
// // //         console.log(callback(i));
// // //     }
// // // }
// // // loop(12,evenOdd);
// // // loop(12,cube);





// // //for each always return undefiend use only for print

// // var arr = [12,3,5,6,8,90];
// // // arr.forEach(element => {
// // //     console.log(element)  //print value
// // // });

// // // arr.forEach((element,index) => {
// // //     console.log(element,index);
// // // });




// // //searching method
// // var ans = arr.find(ele=>ele==12)?"Found":"Not Found";
// // //console.log(ans);//it return first value if two value exits


// // //find index if found return index else return -1; 
// // var index = arr.findIndex(ele=>ele==10);
// // //console.log(index);

// // //by using map we can also make a copy
// //  var copy_arr = arr.map(ele=>ele)


// // //fillter if fillter got true the it make subbarray of that element else return empty array
// // var a = arr.filter(e=>e==6);
// // //console.log(a);

// // //if we want to make clone array using filter
// // var arr_clone = arr.filter(ele=>ele==true)

// // //if we want to delete element in array
// // arr = arr.filter(ele=>ele!=10) //except 10 all are push in array
// // //if multiple element delete;
// // arr = arr.filter(ele=>ele!=10 && ele!=20);






// // //string some feature
// // // var x = [10,2,3];
// // // console.log("X is "+x);  //is convertinto string  output = X is 10,2,3
// // // console.log("X is "+x.toString()); //output = X is 10,2,3

// // // console.log("X is ",x); //print array output=X is  [ 10, 2, 3 ]






// //  //sorting

// // // arr.sort((first,second)=>first-second); //mutable it always sort in actual array
// // // console.log(arr);

// // // //descending
// // // arr.sort((first,second)=>second-first)
// // // console.log(arr)

// // //if string
// // // var name = ["paritosh","deepak","anshu"];

// // // name.sort(); //by default its sort assending order
// // // console.log(name);

// // // //if sort descending order
// // // name.sort((a,b)=>b.localeCompare(a))
// // // console.log(name);

// // //if object
// // let arrObj = [{}]








// // //add all element in array using reducing function
// // var add = arr.reduce((sum,element)=>sum+element,0)
// //  //sum kaa defalut value 0 hai
// // // console.log("add",add);
// // //we can also filtter element using reduce


// // // var char=arr.reduce((acc,e)=>{
// // //     if(e==10){
// // //         acc.push(e);
// // //     }
// // // },[])//acc=blank array

// // //que1 find maximum value in array
// // // var array = [10,490,30,39];

// // // let maxi = array.reduce((acc,e)=>{
// // //     if(acc<e){
// // //         acc=e;
// // //     }
// // // },0);
// // // console.log("maximum = ",maxi);
























// // //assignment

// // // 1. Find Occurance of a target value in given array;
// // // arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
// // // target = 19;
 
// // let array = [19, 22, 18, 19, 16, 18, 19, 21, 24];
// // let target = 19;
// // const cloneArr=array.filter(ele=>ele==target);
// // //console.log(`Occurance: ${cloneArr.length}`);

// // // 2. Reverse a given string using reverse() method 
// // // input = "BrainMentors"
// // // output = "srotnemniarB"
// // //var str = "BrainMentors";
// // // function ReverseString(str) {
// // //     return str.split('').reverse().join('')
// // //     }
// // //     console.log(ReverseString("BrainMentors"));


// //     // 3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// //     // Count of vowels in string;
// //     // ex:- str = "brainmentors"
// //     //         output: count = 4


// var str = "brainmentors";
// var arr1 = str.split('');
// let count=0;
// var a= arr1.filter((ele)=>{
//      if((ele=='a') && (ele=='e') && (ele=='i') && (ele=='o') && (ele='u'))
//      {
//         count+=1;
//      }
//      return count;
// })
// console.log(a);
// // // console.log("count = ",count)
// // // var s = arr1.reduce((acc,e)=>{
// // //     if(e=='a' || e=='e' || e=='i' || e=='o' || e=='u'){
// // //          acc.push(e);
// // //     }
// // // },[])

// // // console.log(s);

// // 4. Write a function to find the sum of all elements in an array.
// // ex:- arr = [1,2,3,4,5];

// // output = 15;

// // var arr = [1,2,3,4,5];
// // var h = arr.reduce((acc,ele)=>acc+ele,0)
// // console.log(h);

// // 5.Write a function to reverse the order of elements in an array.
// // don't Use reverse() Method 
// // ex:- var arr = ['a','b','c','d','e','f']
			
// // 		output = ['f','e','d','c','b','a']

// // let j=0;
// // var arr = ['a','b','c','d','e','f'];
// // console.log(arr)
// // let n = parseInt(arr.length/2);
// // for(let i=0;i<n;i++){
// //     let temp = arr[i];
// //     arr[i]=arr[arr.length-i-1];
// //     arr[arr.length-i-1]=temp;
    
// // }
// // console.log(arr)



// // 6. Write a function to remove a specific element from an array.

// // 	arr = [1,2,3,4,5];
// // 	remove = 3

// // 	output :- [1,2,4,5]

// // let arr = [1,2,3,4,5];
// // let remove = 3
// // arr=arr.filter((e)=>e!=remove);
// // console.log(arr);


// 7. Write a function to find the second largest number in an array.

// ex:- var arr = [12,4,6,9,2,15,3,9];
		
// 		output second largest : 12
//  function fun(){
//     var arr = [12,4,13,6,9,2,15,3,9];
//     let maxi=arr[0];

//  var max = arr.reduce((acc,e)=>{
//        if(maxi<e){
//         acc=maxi;
//         maxi= e;

//        }
//        else if(maxi>acc && e>acc){
//            acc = e;
//        }
//     return acc;
// },arr[0]);
//  console.log(`second maximum is ${max}`);
// }
// fun();


// // 8.Write a function to rotate an array by a given number of steps to the right.

// // ex:- arr = [1,2,3,4,5];
// // 		step = 2;

// //  output = [5,4,1,2,3]

// let array = [1,2,3,4,5];
// //console.log(array);
// let step = 3;
// var a = array.splice(0,step);
// var b = array.splice(0);
// array = [...b,...a]
// //console.log(`after ${step} rotation`,array);


// // 9.Write a function to find the intersection of two arrays (common elements between the two arrays).

// // ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

// // output = [1,4,7]
// function intersection(){
// let arr1 = [2,4,1,7,4,2];
// let arr2 = [5,1,4,7,3,1];
// let s = new Set();
// let i=0;
// while(i<arr1.length){
//     if(arr2.find(e=>e==arr1[i])){
//         s.add(arr1[i]);
//     }
//     i++;
// }
// console.log("intersection",[...s]);
// };
// intersection();



// 10.Write a function to remove duplicate elements from an array while preserving the original order.
// 	ex:- arr = [1,2,5,2,5,1,6,7,7]

// 		output:- [1,2,5,6,7]


// function removeDuplicate(){
//     var arr = [1,2,5,2,5,1,6,7,7];
//     return Array.from(new Set([].concat(...arr)))
// }
// console.log(removeDuplicate());