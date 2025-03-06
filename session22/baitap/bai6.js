let numbers=[2,5,7,4,1,8,6,2,5,7];
let input=+prompt("nhap so");
let count=0;
if(Number.isInteger(input)){
    for(i=0; i<numbers.length; i++){
        if(numbers[i]==input){
            count++;
        }
    }
    if(count>0){
        document.write("so " + input + " xuat hien " + count + " lan trong mang");
    } else{
        document.write("so " + input + " khong ton tai trong mang");
    }
}else{
    document.write("khong hop le")
}