// Bài 1 :
// VD 1 :
 let a = 5, b = 6;
 [a, b] = [b, a];
 console.log(a,b);
// VD 2 :
 let a = 5, b = 6 , tmp ;
 tmp = a;
 a = b;
 b = tmp;
 console.log(a,b)
// VD 3  :
 let a = 5, b = 6;
 a = a + b;
 b = a - b;
 a = a - b
 console.log(a,b);

//  Bài 2 :
const s = `Hello beauty there`;
let a = s.split(' ')
console.log(a)

// Bài 3 :
const a = [4, 5, 7, -8];
console.log(...a);

// Bài 4 : 
let result;
const todoList = ["Jean","T-Shirt","Socks"] ;
result = todoList.map(function(value,index){
    return `${value}`
})
let loop = true ;
while(loop){
    let userInput = prompt(" Hi there , welcome to shop admin panel , what do you want : C , R , U , D ").toUpperCase() ;
    if ( userInput === 'E'){ 
        console.log("This command is not supported");
    }else if ( userInput === 'R'){
            for ( i = 0 ; i <= result.length-1 ; i++){ 
                console.log(`${i +1 }. ${result[i]}`);
                   }
    }else if(userInput === 'C'){
            const newuserInput = prompt("Enter the name of the new item ");
            result.push(newuserInput) ;
            alert("Done");
            for ( i = 0 ; i <= result.length-1 ; i++){ 
                console.log(`${i +1 }. ${result[i]}`);
            }
    }else if ( userInput == 'U'){
            const index = Number(prompt("Enter the position you want to update")) - 1 ;
            const newContent  = prompt(" Enter the new name");
            result[index] = newContent ;
            alert("Done");
            for ( i = 0 ; i <= result.length-1 ; i++){ 
                console.log(`${i +1 }. ${result[i]}`);
            }
    }else if ( userInput === 'D'){  
            const index = Number(prompt("Enter the position you want to delete ")) - 1 ;
            result.splice(index,1) ;
            for ( i = 0 ; i <= result.length-1 ; i++){ 
                console.log(`${i +1 }. ${result[i]}`) ;
            }
    }else {
        break ;
    }
}
// Bai 5
const userInput = prompt(` Enter squence of numbers , separated by "," `)
const user = userInput.split(",")
for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  alert(`The sum of them is ${sum}`);
  
//Bai 6
const userInput = prompt(` Enter squence of numbers , separated by "," `)
const user = userInput.split(",")
let   min = Number(Math.min.apply(Math, user))
alert(`The smallest number is: ${min}`);



// // Bai 7 :
const arr = [3, 4, 6, -9, 10, -88, 2];
let input = Number(prompt(" Enter a number"))
if(input === 3 ){
    alert(`${input} is FOUND in my array at index ${arr.indexOf(3)}` );
}else if(input === 4 ){
    alert(`${input} is FOUND in my array at index ${arr.indexOf(4)}` );
}else if(input === 6 ){
    alert(`${input} is FOUND in my array at index ${arr.indexOf(6)}` );
}else if(input === -9 ){
    alert(`${input} is FOUND in my array at index ${arr.indexOf(-9)}` );
}else if(input === 10 ){
    alert(`${input} is FOUND in my array at index ${arr.indexOf(10)}` );
}else if(input === -88 ){
    alert(`${input} is FOUND in my array at index ${arr.indexOf(-88)}` );
}else if(input === 2 ){
    alert(`${input} is FOUND in my array at index ${arr.indexOf(2)}` );
}else{
    alert(`${input} is not FOUND in my array ` );
}


// Bai 8 :
// 8.1
console.log("Hello, my name is Hung and here is my sheep sizes:")
let sheepSize = [ 5 , 7 , 300 , 98 , 24 , 50, 75];
console.log(sheepSize)

//8.2
let bigsize = Math.max.apply(Math, sheepSize);
console.log(`Now my biggest sheep has size ${bigsize}` );

//8.3
console.log(" After shearing, here is my flock")
sheepSize.splice(sheepSize.indexOf(Math.max.apply(Math, sheepSize)),1,8)
console.log(sheepSize)

// 8.4  Month1.
console.log( `One month has, passed, my sheeps have grown, here are their sizes:`);
let month1 = sheepSize.map(index => index + 50)
console.log(month1)

// 8.4 Month2
let bigsize1 = Math.max.apply(Math, month1);
console.log(`Now my biggest sheep has size ${bigsize1}` );
console.log(" After shearing, here is my flock")
month1.splice(month1.indexOf(Math.max.apply(Math, month1)),1,8)
console.log(month1)
console.log( `One month has, passed, my sheeps have grown, here are their sizes:`);
let month2 = month1.map(index => index + 50)
console.log(month2)

// 8.5 Month3 
let bigsize2 = Math.max.apply(Math, month1);
console.log(`Now my biggest sheep has size ${bigsize2}` );
console.log(" After shearing, here is my flock")
month2.splice(month1.indexOf(Math.max.apply(Math, month2)),1,8)
console.log(month2)
console.log( `One month has, passed, my sheeps have grown, here are their sizes:`);
let month3 = month2.map(index => index + 50)
console.log(month3)

// 8.6 Total
let  total = 0 ;
for ( i = 0 ; i < month3.length ; i ++){
    total += month3[i]
}
console.log(`My flock has size in total: ${total}`);
console.log(`I would get ${total} * 2$ = ${total * 2}`);

// Bai 9 :
// Bai 10 :
// let userInput = prompt("Enter a sequence of names");
// let arr = userInput.split(",");
// let newArray = arr.map((name) => `<${name}>`);

// alert(`${userInput} => ${newArray}`);

// Bài 11 :
// let userInput = prompt("Enter a sequence numbers");
// let arr = userInput.split(",");
// let odd = arr.filter((num) => num % 2 === 1);
// alert(`${userInput} => ${odd}`);
