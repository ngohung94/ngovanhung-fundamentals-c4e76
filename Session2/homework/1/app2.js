// Bài 1
//Boolean là kiểu dư liệu chỉ có 2 giá trị là true hoặc false
// ví dụ  7 +2 =10 (false)
//         8/2=4 (true)
//          10<9 (false)

// Bài 2    
//Flowchart (hay thường được gọi là lưu đồ - sơ đồ quy trình), mặt khác
// là một phương tiện đồ hoạ trực quan hóa chuỗi nhiệm vụ đó thành
// hình ảnh đơn giản bao gồm các bước, các điều kiện thay đổi kết quả,...

// Bài 3 :
// nested conditionals là kết hợp nhiều hàm if trong cùng 1 ô , đôi  khi   
// được gọi là if lồng nhau
// VD :

// let a = 10 ;
// let b = 8;  
// if (a > 8){
//     if (a == b){
//         console.log(' a = b ');
//     }
//     else {
//         console.log(' a != b ');
//     }   
// }

let  height = Number(prompt(" Mời  nhập chiều cao (cm)"));
let  weight = Number(prompt("Mời nhập cân nặng(kg)"));
let  theHeight = height/100;
let BMI = theHeight*weight;
 if(BMI<16){
     console.log("Severely underweight");
 }else if (BMI<18,5){
    console.log("Underweight");
 }else if (BMI<25){
    console.log("Normal");
 }else if (BMI<30){
    console.log("Overweight");
 }else {console.log("Obese")
};


let n = Number(prompt("Nhập số muốn tính giai thừa"))

   let result = n;
   if (n === 0 || n === 1) {
      console.log(1);
   }
   while(n > 1) {
      n--;
      result *= n;
   }
      console.log(result);




