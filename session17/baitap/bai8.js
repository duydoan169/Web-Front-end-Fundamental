let str1= new Date(prompt("moi nhap thoi gian thu nhat"));
let str2= new Date(prompt("moi nhap thoi gian thu nhat"));
let result= Math.abs(str1-str2)/1000/60/60/24;
console.log(result);
document.write(result);