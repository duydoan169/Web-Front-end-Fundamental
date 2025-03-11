function sumof(a, b){
    return a+b;
}
let num1=+prompt("nhap so thu nhat");
let num2=+prompt("nhap so thu hai");
if(Number.isInteger(sumof(num1,num2))){
    console.log(sumof(num1, num2));
} else{
    console.log("khong hop le");
}