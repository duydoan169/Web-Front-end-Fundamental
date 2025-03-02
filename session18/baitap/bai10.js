let number = parseInt(prompt("nhap so tu nhien tu 0-999"));
let result = "";

let hundred=Math.floor(number/100);
let ten=Math.floor((number%100)/10);
let unit=Math.floor(number%10);

if(number<0 || number>999){
    document.write("nhap so tu nhien tu 0-999!");
}
if(number>=0 || number<=999){
    if(hundred>0){
        if(hundred==1){
            result+="mot tram";
        }
        if(hundred==2){
            result+="hai tram";
        }
        if(hundred==3){
            result+="ba tram";
        }
        if(hundred==4){
            result+="bon tram";
        }
        if(hundred==5){
            result+="nam tram";
        }
        if(hundred==6){
            result+="sau tram";
        }
        if(hundred==7){
            result+="bay tram";
        }
        if(hundred==8){
            result+="tam tram";
        }
        if(hundred==9){
            result+="chin tram";
        }
    }
    if(ten==1){
        if(unit==1){
            result+=" muoi mot";
        }
        if(unit==2){
            result+=" muoi hai";
        }
        if(unit==3){
            result+=" muoi ba";
        }
        if(unit==4){
            result+=" muoi bon";
        }
        if(unit==5){
            result+=" muoi lam";
        }
        if(unit==6){
            result+=" muoi sau";
        }
        if(unit==7){
            result+=" muoi bay";
        }
        if(unit==8){
            result+=" muoi tam";
        }
        if(unit==9){
            result+=" muoi chin";
        }
    } else{
        if(ten==2){
            result+=" hai muoi";
        }
        if(ten==3){
            result+=" ba muoi";
        }
        if(ten==4){
            result+=" bon muoi";
        }
        if(ten==5){
            result+=" nam muoi";
        }
        if(ten==6){
            result+=" sau muoi";
        }
        if(ten==7){
            result+=" bay muoi";
        }
        if(ten==8){
            result+=" tam muoi";
        }
        if(ten==9){
            result+=" chin muoi";
        }
        if(unit==1){
            result+=" mot";
        }
        if(unit==2){
            result+=" hai";
        }
        if(unit==3){
            result+=" ba";
        }
        if(unit==4){
            result+=" bon";
        }
        if(unit==5){
            result+=" nam";
        }
        if(unit==6){
            result+=" sau";
        }
        if(unit==7){
            result+=" bay";
        }
        if(unit==8){
            result+=" tam";
        }
        if(unit==9){
            result+=" chin";
        }
    }
    if(number==0){
        result="khong";
    }
}
document.write(result);