let array=[];
let count=0;
for(let i=0; i<10; i++){
    count=0;
    array[i]=prompt("nhap phan tu thu " + (i+1));
    if(array[i]>=10){
        count++;
    }
    if(count>0){
        document.writeln(array[i]);
    }
}
if(count==0){
    document.writeln("khong co phan tu nao lon hon 10");
}