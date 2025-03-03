let month=+prompt("nhap thang");
if(month>=1 && month<=12){
    if(month>=1 && month<=3){
        document.write("mua xuan");
    } else if(month>=4 && month<=6){
        document.write("mua ha");
    } else if(month>=7 && month<=9){
        document.write("mua thu");
    } else if(month>=10 && month<=12){
        document.write("mua dong");
    }
} else{
    document.write("khong hop le");
}