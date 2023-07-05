//array function
/*
push-:is use to add element in last;
pop-:is use delete element from last;
shift-:is use to delete element from begning
unshift-:is use to add element in begning

splice-:is for all delete or insert anywere ;
find-:is use to find element in array


* array is collection of element in javascript but it size is fix


addrese formula = B.A + index*size

*/

//object
/*
*acess by . it work only with string, numeric value does not acces 
*anderic [] it is form all string or num 
var t=[...phoneObject['syam]]; it return copy main array does not change
original one. spread(...) operator 
* object is dynamic in javascript
* another programming language object is static like c++,java



*/
// var phoneObject = {
//      ram:1234,
//      syam:[12,4,5],
//      deepak:'9305175469',
//      name:{
//         first:"deepak",
//         second:"kumar",
//         third:"Singh"
//      }


// }
// console.log(phoneObject['name']['second'])

// var obj = new Object();
// obj['name']='deepak';

// obj.number='9273823'

// obj.sec='C'

// console.log(obj)

// var x = [12,3,4,5,6]
// var y = [12,5,5,78];

// var z = [x,y]; //output = [ [ 12, 3, 4, 5, 6 ], [ 12, 5, 5, 78 ] ]
// var z1 = [...x,...y] //spered output = [12, 3, 4,  5, 6, 12, 5, 5, 78]


// console.log(z);
// console.log(z1);

// //object

// var obj1={
//     id:1,
//     name:"Deepak"
// }

// var obj2={
//     id:2,
//     name:"rahul"
// }

// var obj3 = {one:obj1,two:obj2};

// console.log(obj3); //output = { one: { id: 1, name: 'Deepak' }, two: { id: 2, name: 'rahul' } }
// console.log(obj3.one.name);

// //spread
// var a = {...obj1,...obj2}
// console.log(a); //output={ id: 2, name: 'rahul' }
//traverse using for in loop for(var key in object)

function getCurr() {
    var days = ["Sunday", "Mondey", "Tuesday", "wednesday", "Thursday", "Friday", "Saturady"]
    var date = new Date();
    // console.log(date)
    // console.log("today day is :",days[date.getDay()]);






    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var t;
    if (hours >= 12) {
        t = "PM"
    }
    else {
        t = "AM"
    }
    console.log(`current time : ${hours} ${t} : ${min} : ${sec}`);
}



function getYearMonthDate() {  //question 2
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    var date = today.getDate();
    console.log(`${month + 1}-${date}-${year},${month + 1}/${date}/${year} or ${date}-${month + 1}-${year},${date}/${month + 1}/${year}`);
}
//getYearMonthDate();


function PerimeterReact() {

    var length = parseInt(prompt("Enter length :"));
    var breath = parseInt(prompt("Enter breath : "));
    var perimeter = 2 * (length + breath);
    var area = length * breath;
    console.log("perimeter = ", perimeter);
    console.log("area = ", area);
}

// PerimeterReact();


function f(word) {
    word = word[word.length - 1] + word.substring(0, word.length - 1);
    return word;
}

function Rotate(word) {
    for (let i = 0; i < word.length; i++) {
        word = f(word);
        console.log(word)
    }
}
//Rotate("brainmentors");





