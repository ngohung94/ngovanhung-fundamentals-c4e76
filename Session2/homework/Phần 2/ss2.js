//  Bài 1 :
let n  = Number(prompt("Nhập vào số cần tính giai thừa"))
let result = n ;
if (n<0){console.log("invalid input")
}else if (n === 0 || n === 1) {
        console.log(1);
     }else if(n>1){
     while(n > 1) {
        n--;
        result *= n;
     }console.log(result);
}

// Bài 2:
let name  = prompt("Vui lòng nhập tên");
let age  = Number(prompt("Vui lòng nhập tuổi"));
if(age<18){console.log(name,"chưa đủ tuổi vào trang web này")
}else if(age>=18){let question  = prompt(name + " " + "có muốn đăng nhập vào trang web này không (yes/no)")
    if(question === 'yes'){console.log(name,'đã vào trang web thành công')
    } else if (question === 'no'){console.log(name, 'thoát khỏi trang web')
    } 
}

// Bài 3 :

let username = prompt("Vui lòng nhập username");
let password = prompt("Vui lòng nhập password");
let username2 = "1" ;
let password2 = "1" ;

if(username===username2  && password===password2){
    console.log("Đăng nhập thành công")
}else if(username !== username2){console.log("username sai")
    }else if(password !== password2){console.log("password sai")}   


// Bài 4 :

let name1 = prompt(" Vui lòng nhập tên ")
let month = Number(prompt('Vui lòng nhập vào tháng sinh'))

switch (month){
    case 1 : 
    case 2 : 
    case 3 : 
    { console.log(name1 ,'sinh vào mùa xuân');
    break;
    }
    case 4 : 
    case 5 : 
    case 6 : 
    { console.log(name1 ,'sinh vào mùa hạ');
    break;
    }
    case 7 : 
    case 8 : 
    case 9 : 
    { console.log(name1 ,'sinh vào mùa thu');
    break;
    }
    case 10 : 
    case 11 : 
    case 12 : 
    { console.log(name1 ,'sinh vào mùa đông');
    break;
    }
    default : { 
        console.log(" không hợp lệ ");
    }
}


// Bai 5 :

let a  = Number(prompt("Nhập tham số a của phương trình bậc 2"))
let b  = Number(prompt("Nhập tham số b của phương trình bậc 2"))
let c  = Number(prompt("Nhập tham số c của phương trình bậc 2"))

let x1 = 1 ;
let x2 = 1 ;
let delta=(b*b-4*a*c)
if(delta ==0){
 console.log("phuong trinh co nghiem kep");
 x1=-b/(2*a) ;
 x2=-b/(2*a);
 console.log(x1)
 console.log(x2)
}
else if(delta<0){
    console.log("phuong trinh vo nghiem");
} 
else{
    console.log("phuong trinh co hai nghiem");
 x1=(-b-Math.sqrt(delta))/(2*a);
 x2=(-b+Math.sqrt(delta))/(2*a);
 console.log(x1)
 console.log(x2)
}


// Bài 6 :

let chain = prompt(" Vui lòng nhập vào  tên chuỗi ")
let newString = ""
for (let i = chain.length-1 ; i>=0;i--){
        newString += chain[i]
}
console.log(newString)

let next = prompt(" Bạn có muốn tiếp tục chương trình (yes/no)")
if (next === "yes") {
    let chain = prompt(" Vui lòng nhập vào  tên chuỗi ")
let newString = ""
    let i = chain.length-1
    while (i >= 0){
    newString += chain[i]
    i--
    }
  console.log(newString)
}else if ( next === "no"){console.log("dừng chương trình")}