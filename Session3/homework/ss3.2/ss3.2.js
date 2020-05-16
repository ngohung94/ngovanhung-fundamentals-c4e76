// //      a 

// const userInput = prompt(` Enter a numbers , separated by "," `)
// const arr = userInput.split(",")
// let max1 = 0;
// for (i = 0 ; i < arr.length ; i++){
//     if( i === 0 ){
//         max1 = arr[0]
//     }else if ( arr[i] > max1){
//         max1 = arr[i]
//     }
// }
//     arr.splice(arr.indexOf(max1),1);
// let max2 = Math.max(...arr)
//     console.log(max2)


// //     b
//  const userInput = prompt(` Enter a numbers , separated by "," `)
//  const arr = userInput.split(",")
// let min1 = 0;
// for ( i = 0 ; i < arr.length ; i++){
//     if( i === 0 ){
//         min1 = arr[0]
//     }else if ( arr[i] < min1){
//         min1 = arr[i]
//     }
// }
//  arr.splice(arr.indexOf(min1),1);
//  let min2 = Math.min(...arr)
//  console.log(min2)


// //      c
// const userInput = prompt(` Enter a numbers , separated by "," `)
//   const arr = userInput.split(",")
// let temp = [];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         loop = true;
//             for (j = 2; j < arr[i]; j++) {
//                 if (arr[i] % j === 0) {
//                     loop = false;
//                 }
//             }
//         if (loop = true) {
//             temp.push(i);
//         }
//     }
//     if (temp.length !== 0) {
//       console.log(temp);
//   } else {
//       console.log("NOT FOUND");
//   }
// }


  

// //      d   
const userInput = prompt(` Enter a numbers , separated by "," `)
const arr = userInput.split(",")
let trungvi;
    const nums = [...arr].sort((a, b) => a - b);
   let center = Math.floor(nums.length/2) ;
    if(nums.length % 2 !== 0){
      trungvi = nums[center]
    }else {
      trungvi = (nums[(center - 1)] + nums[center])/2
    }            
    console.log(`Trung vị của dãy là ${trungvi}`)


//  //  e
// const userInput = prompt(` Enter a numbers , separated by "," `)
// const arr = userInput.split(",")
// let arr2 = []
// for (let i = 0 ; i < arr.length ; i++){
//   for (let j = i; j < arr.length ; j++){
//   	 if(Number(arr[i]) + Number(arr[j]) === 5){
//           console.log(arr[i],arr[j])
//           arr2.push(arr[i],arr[j])
//     }
//   }
// }
// if(arr2.length == 0 ){
//   console.log("Not found")
// }



// // Bai 2 
// let userInput = prompt("Nhập vào 1 dãy String , cách nhau bởi dấu ','");
// let arr = userInput.split(",");
// console.log(arr);
// let local = [];
// let loop = true;
// for(i = 0; i < arr.length ; i++){
//     for(j = 0 ; j < arr[i].length/2 ; j++){
//         if (arr[i][j] !== arr[i][arr[i].length - 1 - j]){
//             loop = false;
//             break;
//         }
//     }
//     if (loop == true){
//       local.push(i)
//     }
//     loop = true;
// }
//   if(local.length > 0) {
//   console.log(`Các String đối xứng ở vị trí  : ${local}` );
//   }else {
//     console.log("Not found")
//   }




// //  Bai  3
// // // a
// let matrix = [
// 	[-7, 8, 9],
// 	[4, 5, 6],
// 	[1, 0, -3]
// ]
// console.log(matrix)

// //  b Tính tổng từng hàng của ma trận
// for (let i = 0; i < matrix.length; i++) {
//   let hang = 0;
//   for (let j = 0; j < matrix[i].length; j++) {
//     hang += matrix[i][j];
//   }
//   console.log(`Tổng hàng ${i+1}: ${hang}`);
// }

// // c. Tính tổng từng cột của ma trận
// for (let i = 0; i < matrix.length; i++) {
//   let cot = 0;
//   for (let j = 0; j < matrix.length; j++) {
//     cot += matrix[j][i];
//   }
//   console.log(`Tổng cột ${i+1}: ${cot}`);
// }


// // d
// let dgcheo1 = 0 ;
// let dgcheo2 = 0 ;
// for (let i = 0; i < matrix.length; i++) {
//   dgcheo1 += matrix[i][i];
//   dgcheo2 += matrix[i][matrix.length - 1 - i];
// }
// console.log(`đường chéo 1 : ${dgcheo1}`)
// console.log(`đường chéo 2 : ${dgcheo2}`)

  
 
// //    e
// let arr = [];
// for (let i = 0; i < matrix.length; i++) {
//   arr.push(...matrix[i]);
// }
// console.log(arr);
// let min = Math.min(...arr);
// let max = Math.max(...arr);
// console.log(`Min : ${min}`);
// console.log(`Max : ${max}`);


// // f 
// let duong = 0 ; 
// let am =  0 ;
// let arr = []
// for (let i = 0; i < matrix.length; i++) {
//   arr.push(...matrix[i]);
// }
// console.log(arr)
//   for ( let i = 0 ; i < arr.length ; i ++ ){
//     if (arr[i] > 0) {
//       duong += arr[i];
//     } else {
//       am += arr[i];
//     }
//   }

// console.log(`tong cac so duong la ${duong}`)
// console.log(`tong cac so duong la ${am}`)

