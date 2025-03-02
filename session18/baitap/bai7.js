let a = Number(prompt("Mời bạn nhập số a : "));
let b = Number(prompt("Mời bạn nhập số b : "));
let operation = prompt("mời bạn chọn phép tính + - * / :");
if (operation == "+"){
    alert("a + b = " + (a+b));
}else if (operation == "-") {
    alert("a - b = " + (a-b));
}else if(operation == "*" ){
    alert("a * b = " + (a*b));
}else if (operation == "/") {
    alert("a / b = " + (a/b));
}else{
    alert("không có phép tính " + operation +" này ");
}