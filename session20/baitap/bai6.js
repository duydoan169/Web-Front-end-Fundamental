let input=+prompt("nhap so nguyen");
let check=0;
if(Number.isInteger(input)){
    if(input==1){
        document.write("khong phai so nguyen to");
    } else{
        for(i=2; i<=input/2; i++){
            if(input%i==0){
                check++;
                break;
            }
        }
        if(check==0){
            document.write("so nguyen to");
        } else{
            document.write("khong phai so nguyen to");
        }
    }
} else{
    document.write("nhap so nguyen!");
}