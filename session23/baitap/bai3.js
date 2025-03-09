let array=[];
let count=0;
let loopNum=+prompt("nhap so phan tu muon nhap");
for(let i=0; i<loopNum; i++){
    array[i]=+prompt("nhap phan tu thu " + (i+1));
    if(array[i]<0){
        count++;
    }
}
if(count!=0){
    document.writeln(count);
} else if(array.length!=0 && count==0){
    document.writeln("mang khong co so am");
} else if(array.length==0){
    document.writeln("so phan tu khong hop le");
}