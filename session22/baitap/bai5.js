let array=[1,2,3,4,5];
let sumOdd=0; sumEven=0;
for(i=0; i<array.length; i++){
    (array[i]%2==0) ? (sumEven+=array[i]) : (sumOdd+=array[i]);
}
document.write(`
tong cac so chan la: ${sumEven} <br>
tong cac so le la: ${sumOdd}
`);