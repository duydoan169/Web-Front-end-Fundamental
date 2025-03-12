let array=[];
for(let i=0; i<5; i++){
    array[i]=prompt("nhap phan tu thu " + (i+1));
}
let newArr=array.filter(str => str.length > 5);
if(newArr.length==0){
    console.log("mang khong co phan tu")
} else if(newArr.length > 0){
    console.log(newArr);
}