let a = +prompt("nhap a");
let b = +prompt("nhap b");
let c = +prompt("nhap c");
let delta=b*b-4*a*c;
if(delta>0){
    let x1=(-b+(delta**(1/2)))/2*a;
    let x2=(-b-(delta**(1/2)))/2*a;
    document.write("phuong trinh co 2 nghiem phan biet: x1 = " + x1 + "; x2 = " + x2);
} else if(delta==0){
    let x3=(-b)/2*a;
    document.write("phuong trinh co 2 nghiem kep: x1 = x2 = " + x3);
} else{
    document.write("phuong trinh vo nghiem");
}
