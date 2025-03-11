let count=0;
function checkPrime(a){
    if(Number.isInteger(a) && a>0){
        for(i=2; i<=a**(1/2); i++){
            if(a%i==0 || a==1){
                count++;
                break;
            }
        }
        if(count==0){
            console.log("la so nguyen to");
        } else{
            console.log("khong phai so nguyen to")
        }
    } else{
        console.log("du lieu khong hop le");
    }
}
let input=+prompt("nhap so nguyen");
checkPrime(input);