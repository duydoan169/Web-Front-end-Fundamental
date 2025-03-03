let num1=+prompt("nhap so thu nhat");
let num2=+prompt("nhap so thu hai");
let num3=+prompt("nhap so thu ba");
let max;
(num1>num2) ? ((num1>num3) ? (max=num1) : (max=num2)) : ((num2>num3) ? (max=num2) : (max=num3));
document.write("trong 3 so " + max + " la so lon nhat");