let math=+prompt("nhap diem toan: ");
let physics=+prompt("nhap diem ly: ");
let chemistry=+prompt("nhap diem hoa: ");
let average=((math+physics+chemistry)/3).toFixed(2);
document.write("Diem trung binh toan, li, hoa la: " + average);