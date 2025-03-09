let array=[];
let loopNum=+prompt("nhap so phan tu trong mang");
if(loopNum>0){
    for(let i=0; i<loopNum; i++){
        array[i]=prompt("nhap phan tu thu " + (i+1));
    }
    array=array.sort();
    document.writeln("phan tu lon thu hai la: " + array[array.length-2]);
} else if(loopNum==0){
    document.writeln("mang khong co phan tu nao");
} else{
    document.writeln("so luong phan tu khong duoc nho hon 0");
}