let array=[];
let count=0;
let sum=0;
let loopNum=+prompt("nhap so phan tu muon nhap");
if(loopNum>0){
    for(let i=0; i<loopNum; i++){
        array[i]=+prompt("nhap phan tu thu " + (i+1));
        if(!Number.isNaN(array[i])){
            sum+=array[i];
            count++;
        }
    }
    if(count!=0){
        document.writeln(sum);
    } else if(array.length>0){
        document.writeln("khong co ki tu so");
    } else if(array.length==0){
        document.writeln("mang khong co phan tu")
    }
} else{
    document.writeln("so luong phan tu khong duoc am");
}