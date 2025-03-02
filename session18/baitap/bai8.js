let num1 = Math.abs(Number(prompt("nhập cạnh thứ nhất :"))); 
let num2 = Math.abs(Number(prompt("nhập cạnh thứ hai :")));
let num3 = Math.abs(Number(prompt("nhập cạnh thứ ba :")));
if(num1 + num2 > num3 && num1 + num3 > num2 && num3 + num2 > num1 ){
    if(num1 == num2 && num2 == num3){
        document.write("đây là tam giác đều");
    }else if (num1 == num2 || num1 == num3 || num3 == num2 ) {
        document.write("đây là tam giác cân ");
    }else if (num1**2 + num2**2 == num3**2 || num1**2 + num3**2 == num2**2 || num3**2 + num2**2 == num1**2 ) {
        document.write("đây là tam giác vuông ");
    } else{
        document.write("đây là tam giác thường");
    }
}else{
    document.write("đây không là tam giác");
}