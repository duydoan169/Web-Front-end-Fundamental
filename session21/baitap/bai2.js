let numb , sum  = 0, even=0, odd=0;
for(let i = 0 ; i < 5 ; i++){
    numb = Number(prompt("mời bạn nhập số :" ));
    if(Number.isInteger(numb)){
        if(numb % 2 != 0 ){
            odd++;
        } else{
            even++
        }
    } else{
        document.write("bạn nhập không đúng định dạng");
    }
} 
document.write("số lượng số lẻ là : " , odd);
document.write("<br>số lượng số chẵn là : " , even);