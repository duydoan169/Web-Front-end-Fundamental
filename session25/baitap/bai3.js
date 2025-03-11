function checkEven(a){
    if(a%2==0){
        return true;
    }
}
let count=0;
let array=[11, 4, 65, 6];
if(Array.isArray(array)){
    for(i=0; i<array.length; i++){
        if(checkEven(array[i])){
            console.log(array[i]);
            count++;
        }
    }
    if(count==0){
        console.log("khong co so chan");
    }
} else{
    console.log("du lieu khong hop le")
}