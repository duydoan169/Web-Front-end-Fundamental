function maxNum(input){
    if(Number.isInteger(input)){
        if(input>0){
            let max=input.toString().split("").sort();
            console.log(max.reverse().join(""));
        } else{
            let max=input.toString().split("").sort();
            console.log("-" + max.reverse().join("").slice(0,max.length-1));
        }
    } else{
        console.log("du lieu khong hop le");
    }
}
let input = +prompt("nhap so nguyen");
maxNum(input);