let money = +prompt("nhap so tien ban dau");
let interest = (+prompt("nhap lai xuat thang"))/100;
let month = +prompt("nhap so thang gui");
if(Number.isInteger(money) && Number.isInteger(month) && money>0 && interest>0 && month>0){
    let moneyTotal= money*((1+interest)**month);
    let interestTotal= moneyTotal-money;
    document.write("tien lai: " + interestTotal.toFixed(3) + "<br>");
    document.write("tien nhan duoc: " + moneyTotal.toFixed(3));
} else{
    document.write("khong hop le");
}