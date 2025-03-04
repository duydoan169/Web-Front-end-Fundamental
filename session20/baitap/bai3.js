let number=+prompt("nhap chuoi so nguyen");
let check=0;
if(Number.isInteger(number)){
    let numberStr=number.toString();
    for(i=0; i<=numberStr.length/2; i++){
        if(numberStr[i] != numberStr[numberStr.length-1-i]){
            check++;
        }
    }
    if(check==0){
        document.write("chuoi doi xung");
    } else{
        document.write("chuoi khong doi xung");
    }
} else{
    document.write("chuoi khong hop le");
}