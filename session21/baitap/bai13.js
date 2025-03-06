let input=prompt("nhap a or b or c or d");
switch(input){
    case "a":
        for(i=0; i<10; i++){
            for(j=10-i; j>0; j--){
                document.write("*");
            }
            document.write("<br>")
        }
        break;
    case "b":
        for(i=1; i<=10; i++){
            for(j=0; j<i; j++){
                document.write("*");
            }
            document.write("<br>")
        }
        break;
    case "c":
        for(i=1; i<=10; i++){
            for(k=10-i;k>0; k--){
                document.write("&nbsp;&nbsp")
            }
            for(j=0; j<i; j++){
                document.write("*");
            }
            document.write("<br>")
        }
        break;
    case "d":
        for(i=10; i>0; i--){
            for(k=0;k<10-i; k++){
                document.write("&nbsp;&nbsp")
            }
            for(j=0; j<i; j++){
                document.write("*");
            }
            document.write("<br>")
        }
        break;
    default:
        document.write("khong hop le");
}