// Bai1
// a
// Để kiểm tra 1 kiểu biến ta dùng câu lệnh : typeof
// vd kiểu string
    let variable = "abc" ;
  console.log( typeof variable) ;
  
         

// b. Các lỗi dẫn đến tên biến không hợp lệ

// - Tên biến khhông bắt đầu bằng chữ số
// - Tên biến không bắt đầu bằng kí tự đặc biệt như ^&*() trừ dấu gạch dưới _
// - Tên biến không được trùng với từ khóa như var, for, if...



//Bài 2 :

let Radius = prompt("Tính diện tích hình tròn, Vui lòng nhập bán kính") ;
let pi = 3.14 ;
let Arena = Radius*Radius*pi ;
console.log(Arena) ;

// Bài 3 :

let Celsius = prompt("Đổi từ độ C sang độ F,Vui lòng nhập độ C") ;
let Fahrenheit = Celsius*1.8+32 ;
console.log(Fahrenheit) ;
