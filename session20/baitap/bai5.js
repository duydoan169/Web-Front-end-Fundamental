let a=+prompt("nhap a");
let b=+prompt("nhap b");
let result=1;
if(Number.isNaN(a) || Number.isNaN(b) || a==0){
    document.write("khong hop le")
} else{
    for(i=0; i<Math.abs(b); i++){
        b>0 ? result=result*a : result=result*(1/a);
    }
    document.write(result);
}