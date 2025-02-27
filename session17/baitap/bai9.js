let a=+prompt("nhap a: ");
let b=+prompt("nhap b: ");
let c=+prompt("nhap c: ");
let delta=(b**2)-4*a*c;
if(delta>0){
    x1=(-b+delta**(1/2))/2*a;
    x2=(-b-delta**(1/2))/2*a;
    document.write("nghiem 1: ", x1 ,"<br>");
    document.write("nghiem 2: ", x2);
} else{
    document.write("delta phai lon hon 0");
}