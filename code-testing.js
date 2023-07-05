// var arr = [1,2,3,5,6,8,9,10];

// var char=arr.reduce((acc,e)=>{
//     if(e==10){
//         acc.push(e);
//     }
//     return acc
// },[])

// console.log(char);


//que1 find maximum value in array
// var array = [10,490,30,39];
// let maxi = array.reduce((acc,element)=>{
//           if(acc<element)
//             {
//                 acc = element;
//             }
//         return acc;
// },0)
// console.log(maxi);


var str = "brainmentors";
var arr1 = str.split('');
//let count=0;
var a= arr1.reduce((acc,ele)=>{
     if((ele=='a') || (ele=='e') || (ele=='i') || (ele=='o') || (ele='u'))
     {
          acc+=1;
     }
     return acc;
},0)
console.log(a);

/**************************** important point**************************
 * 
 * //filter
  1.The filter() function in JavaScript returns a new array containing elements from the original array that satisfy a specified condition. It creates a new array by filtering out elements that do not meet the condition and only includes elements for which the condition returns true.

The syntax for the filter() function is as follows:
array.filter(callback(element[, index[, array]])[, thisArg])

2.The filter() function takes in a callback function as its argument, which is executed for each element in the array. The callback function receives three parameters: element (the current element being processed), index (optional, the index of the current element), and array (optional, the array that filter() was called upon).

Inside the callback function, you specify the condition that each element should satisfy. If the condition returns true for an element, that element is included in the new array. If the condition returns false, the element is excluded.

Here's an example that demonstrates the filter() function:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
n this example, the numbers array contains integers from 1 to 10. The filter() function is used with the callback function (num) => num % 2 === 0 to filter out only the even numbers. The resulting evenNumbers array contains the elements [2, 4, 6, 8, 10], which are the even numbers from the original array.


//map

1.The map() function in JavaScript returns a new array containing the results of applying a provided function to each element of the original array. It creates a new array by transforming each element of the original array based on the logic defined in the provided function.

The syntax for the map() function is as follows:
array.map(callback(element[, index[, array]])[, thisArg])

2.The map() function takes in a callback function as its argument, which is executed for each element in the array. The callback function receives three parameters: element (the current element being processed), index (optional, the index of the current element), and array (optional, the array that map() was called upon).

Inside the callback function, you define the transformation logic for each element. The return value of the callback function is the transformed value for that element, and it will be included in the new array created by map().

Here's an example that demonstrates the map() function:
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num ** 2);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
In this example, the numbers array contains integers from 1 to 5. The map() function is used with the callback function (num) => num ** 2 to square each number in the array. The resulting squaredNumbers array contains the elements [1, 4, 9, 16, 25], which are the squares of the original numbers.



//reduce
it return accumulater value
The reduce() function in JavaScript is used to reduce an array to a single value. It executes a provided callback function on each element of the array and accumulates a single result based on the logic defined in the callback function.

The syntax for the reduce() function is as follows:
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
2.
The reduce() function in JavaScript is used to reduce an array to a single value. It executes a provided callback function on each element of the array and accumulates a single result based on the logic defined in the callback function.

The syntax for the reduce() function is as follows:

javascript
Copy code
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

2.The reduce() function takes in a callback function as its argument, which is executed for each element in the array. The callback function receives four parameters: accumulator (the accumulated value), currentValue (the current element being processed), index (optional, the index of the current element), and array (optional, the array that reduce() was called upon).

Inside the callback function, you define the logic to combine the accumulator with the currentValue and return the updated accumulator. The reduce() function keeps track of the accumulated value across iterations and uses it as the accumulator argument for each subsequent callback invocation.

Here's an example that demonstrates the reduce() function:
accumulater kuch v ho sakta hai [],number ,etc



//for each loop always return undefined it use to print 




arrow function pure function which is not use to make custom object it doest not had this
har function ke pass apna this hota hai

const obj {
     arr:[1,2,3,4,56,6],
     even:[],
     odd:[],
     evenOdd(){
          const that = this //obj kaa addres hoga
          this.arr.forEach(function(e){ //yaha par function bana to yai this v banaya gaa so we use ///arrow function because its does not make this;
               if(e%2==0){
                    this.even.push(e);
               }
               else{
                    this.odd.push(e);
               }
          })
     }
}

console.log(obj.evenOdd()); this show error



const obj {
     arr:[1,2,3,4,56,6],
     even:[],
     odd:[],
     evenOdd(){
          const that = this //obj kaa addres hoga
          this.arr.forEach(function(e){ //yaha par function bana to yai this v banaya gaa so we use ///arrow function because its does not make this;
               if(e%2==0){
                    that.even.push(e);
               }
               else{
                    that.odd.push(e);
               }
          })
     }
}


 */

let obj = {
     arr:[1,2,3,4,56,6],
     even:[],
     odd:[],
     evenOdd(){
          const that = this 
          this.arr.forEach(function(e){ 
               if(e%2==0){
                    this.even.push(e);
               }
               else{
                    this.odd.push(e);
               }
          })
     }
}