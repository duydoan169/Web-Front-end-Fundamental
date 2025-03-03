let number=+prompt("nhap so tu nhien");
if(Number.isInteger(number)){
    if(number%3==0 && number%5==0){
        document.write(number + " chia het cho ca 3 va 5");
    } else{
        document.write(number + " khong chia het cho ca 3 va 5");
    }
} else{
    document.write("ki tu vua nhap khong phai so tu nhien");
}