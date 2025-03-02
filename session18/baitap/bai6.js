let year = Math.abs(+prompt("mời bạn nhập năm "));
if(((year%4==0) && (year % 100 !=0)) || (year%400==0)){
    document.write("năm nhuận");
} else{
    document.write("năm không nhuận");
}