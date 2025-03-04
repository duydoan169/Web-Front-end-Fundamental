let input = parseInt(prompt("nhap so nguyen to"));
let fibonacci="";
if(Number.isInteger(input) && input > 0){
    let fib0 = 1;
    let fib1 = 1;
    fibonacci+=fib0;
    if(input>1){
        fibonacci+=" " + fib1;
    }
    for(i=2; i<input; i++){
        let fib2=fib0+fib1;
        fib0=fib1;
        fib1=fib2;
        fibonacci+=" "+fib2;
    }
    document.write("fibonacci: " + fibonacci);
} else{
    document.write("nhap so nguyen dương");
}