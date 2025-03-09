let arrFib=[];
let array=[];
let check=0;
let fib1=1, fib2=1;
let loopNum=+prompt("nhap so phan tu trong mang");
if(loopNum>0){
    for(let i=0; i<loopNum; i++){
        array[i]=prompt("nhap phan tu thu " + (i+1));
    }
    arrFib.push(fib1);
    if(loopNum>1){
        arrFib.push(fib2)
    }
    for(i=2; i<loopNum; i++){
        let fib3=fib1+fib2;
        arrFib.push(fib3);
        fib1=fib2;
        fib2=fib3;
    }
    for(i=0; i<loopNum; i++){
        if(arrFib[i]!=array[i]){
            check++;
        }
    }
    if(check==0){
        document.writeln("la day so fibonacci");
    } else{
        document.writeln("khong phai day so fibonacci");
    }
} else if(loopNum==0){
    document.writeln("mang khong co phan tu nao");
} else{
    document.writeln("so luong phan tu khong duoc nho hon 0");
}