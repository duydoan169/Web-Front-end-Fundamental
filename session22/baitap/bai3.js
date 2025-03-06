let str=+prompt("nhap chuoi so");
if(Number.isInteger(str)){
    str=str.toString();
    let arr=str.split("");
    for(i=arr.length-1; i>=0; i--){
        document.write(arr[i]);
    }
} else{
    document.write("khong hop le");
}