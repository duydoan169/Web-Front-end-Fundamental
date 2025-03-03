let month = prompt("nhap thang: ");
if(month >= 1 && month<=12){
    if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
        document.write("thang " + month + " co 31 ngay");
    } else if(month==2){
        document.write("thang 2 co 28 hoac 29 ngay");
    } else{
        document.write("thang " + month + " co 30 ngay");
    }
} else{
    document.write("thang khong hop le");
}