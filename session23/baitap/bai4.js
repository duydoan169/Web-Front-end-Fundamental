let array=[];
let number="";
let count=0;
let loopNum=+prompt("nhap so phan tu muon nhap");
for(let i=0; i<loopNum; i++){
    array[i]=+prompt("nhap phan tu thu " + (i+1));
    if(!Number.isNaN(array[i])){
        number+=array[i] + " ";
        count++;
    }
}
if(count!=0){
    document.writeln(number);
} else{
    document.writeln("khong co ki tu so");
}