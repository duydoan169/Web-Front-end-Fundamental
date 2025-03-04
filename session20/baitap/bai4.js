let str = prompt("nhap chuoi");
let char = prompt("nhap ki tu");
let check=0;
if(char.length==1){
    for(i=0; i<str.length; i++){
        if(str[i]==char){
            check++;
        }
    }
    if(check!=0){
        document.write("chuoi chua ki tu can tim");
    } else{
        document.write("chuoi khong chua ki tu can tim");
    }
} else{
    document.write("nhap 1 ki tu!");
}