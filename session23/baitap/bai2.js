let array=[];
for(let i=0; i<10; i++){
    array[i]=prompt("nhap phan tu thu " + (i+1));
}
let maxNum=array[0];
let maxIndex=0;
for (let key in array){
    if(array[key]>maxNum){
        maxNum=array[key];
        maxIndex=key;
    }
}
if(array.length!=0){
    document.writeln("so lon nhat: " + maxNum + "<br>");
    document.writeln("vi tri: " + maxIndex);
} else{
    document.writeln("khong co so lon nhat");
}