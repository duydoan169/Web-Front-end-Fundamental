let math=+prompt("nhap so diem toan:");
let english=+prompt("nhap so anh:");
let literature=+prompt("nhap so van:");
let average=((math+english+literature)/3).toFixed(2);
if(average<5.0){
    document.write("Yeu");
} else if(average<6.5){
    document.write("Trung binh");
} else if(average<8.0){
    document.write("Kha");
} else{
    document.write("Gioi");
}