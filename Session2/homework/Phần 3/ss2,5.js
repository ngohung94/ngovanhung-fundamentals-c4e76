// Bài 1 :
let n = Number(prompt("Nhập vào số n  để tính tổng các số lẻ hoặc chẵn từ 1 đến n"));
   
let sumEven = 0;
let sumOdd =0 ;
    for (let i =1 ; i<=n ; i++ ){
   
if (i%2===0){
        sumEven += i; 
 }else{
     sumOdd +=i;
}
    }
console.log( `tổng số chẵn  từ 1 đến ${n} là :` + sumEven);
console.log( `tổng số lẻ từ 1 đến ${n} là :` + sumOdd);


//  Bài 2  :

let number = Number(prompt("Nhập vào số muốn kiểm tra có phải số nguyên tố hay không"));
if (number<2){
    console.log(false)
}else{
    let a = true ;
    for(let i = 2 ; i < number ; i++){
        if(number % i == 0){
            a = false;
}
}
   if(a === true)  {console.log(true)
    }else {console.log(false)
}
}
 
// Bài 3

let userNumber = Number(prompt("Nhập vào số muốn in ra các số nguyên tố nhỏ hơn"));
if (userNumber<2){
    console.log(`Không có số nguyên tố nào nhỏ hơn ${userNumber}`)
}else{
    console.log(`Số nguyên tố nhỏ hơn ${userNumber} là :`)
    let count = true;
    for (let i = 2; i < userNumber; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                count =false;
            }
        }
        if (count === true) {
            console.log(i);
        }
        count = true;
    }
    }

// Bài 4
let  fib = Number(prompt('Nhập vào số n >= 0 để in ra phần tử thứ n của dãy Fibonacci'))
if(fib<0){
      console.log("Không hợp lệ");     
    }else {
    let a =1,b=0,temp;
    for(i = 0; i< fib; i++){
        temp = a;
        a = a + b; 
        b = temp; 
}
        console.log(`Phần tử thứ ${fib} của dãy Fibonacci là:` + b)
    }


//Bài 5;
let loop = true;
    while(loop ){
        let  sumNumber = Number(prompt(' Nhập vào số muốn tính tổng các số trước đó'));
      if (sumNumber>=0){
     let   sum = (sumNumber-1)+(sumNumber-2) ;
     console.log( `Tổng các số trước ${sumNumber} là :` + sum);
      }else{
        loop = false ;
        break;
      } 
    }

 //  Bài 6
let input=prompt("Nhập chuỗi bất kỳ ");
let loop=true;
  for(let i=0;i<=input.length/2;i++)
  if(input[i] !== input[input.length-1-i]){
    loop=false;
    console.log(false)
    break;
  }else {
    console.log(true)
  }


// Bài 7 :
let m = Number(prompt(" Nhập chiều rộng của hình chữ nhật"))
let n = Number(prompt(" Nhập chiều dài của hình chữ nhật"))
for(let i = 1; i <= m; ++i){
    for(let j = 1; j <= n; ++j){
    document.write("*")
}
document.write(`</br>` ) 
 }

 // Bài 8

for(i = 0; i <= 36 ; i++){
    if((i * 2 + (36-i)*4) === 100){
      console.log(`Số  gà là : ` + i)
      console.log(`Số  chó là : ` + (36-i))
    }
}

//Bài 9 :

let a1 = Number(prompt("Nhập số a1"));
let b1 = Number(prompt("Nhập số b1"));
let c1 = Number(prompt("Nhập số c1"));
let a2 = Number(prompt("Nhập số a2"));
let b2 = Number(prompt("Nhập số b2"));
let c2 = Number(prompt("Nhập số c2"));

let x,y;
console.log(`${a1}x + ${b1}y = ${c1}`);
console.log(`${a2}x + ${b2}y = ${c2}`);
y=(c2*a1-a2*c1)/(b2*a1-b1*a2);
x=(c1-b1*y)/a1;
console.log("x= "+x);
console.log("y= "+y)
