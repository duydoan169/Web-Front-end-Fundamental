let array=[];
for(let i=0; i<10; i++){
    array[i]=+prompt("nhap phan tu thu " + (i+1));
    if(Number.isNaN(array[i])){
        console.log("du lieu khong hop le, nhap lai");
        i--;
    }
}
let newArr=array.filter(num => num>=10);
if(newArr.length==0){
    console.log("mang khong co phan tu")
} else if(newArr.length > 0){
    console.log(newArr);
}