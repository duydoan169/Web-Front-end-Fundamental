let str = +prompt("mời bạn nhập: ");
if(str>=0){
    str=str.toString();
    let arr = str.split("");
    let maxArr=arr[0];
    for(i=0; i<arr.length; i++){
        if(maxArr<arr[i]){
            maxArr=arr[i];
        }
    }
    document.write(maxArr + " la so lon nhat");
} else if(str<0){
    str=Math.abs(str);
    str=str.toString();
    let arr=str.split("");
    let maxArr=arr[0];
    for(i=0; i<arr.length; i++){
        if(maxArr<arr[i]){
            maxArr=arr[i];
        }
    }
    document.write(maxArr + " la so lon nhat");
} else{
    document.write("khong hop le");
}