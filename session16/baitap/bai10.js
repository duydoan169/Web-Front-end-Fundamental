let num1 = +prompt("nhap so thu 1: ");
let num2 = +prompt("nhap so thu 2: ");
let random = Math.floor(Math.random() * (Math.max(num1,num2) - Math.min(num1,num2)) ) + Math.min(num1,num2) ;
document.write(random);