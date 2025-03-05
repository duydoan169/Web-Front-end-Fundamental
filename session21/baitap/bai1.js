let numb , sum  = 0  ;
for(let i = 0 ; i < 5 ; i++){
    numb = Number(prompt("mời bạn nhập số :" ));
    if(Number.isInteger(numb)){
        if(numb % 2 != 0 ){
            sum += numb ;
        }
    } else{
        document.write("bạn nhập không đúng định dạng");
    }
} 
document.write("tổng các số lẻ là : " , sum);