let number=+prompt("nhap so nguyen");
let sum=0;
if(Number.isInteger(number)){
    for(i=0; i<=number; i++){
        sum+=i;
    }
    document.write(sum);
} else{
    document.write("du lieu nhap vao khong hop le");
}