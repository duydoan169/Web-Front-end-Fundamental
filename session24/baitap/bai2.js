let array=[];
let choice;
do{
    choice=prompt(`
        1. Nhap vao mang
        2. Hien thi mang
        3. Hien thi phan tu chan va le
        4. tinh trung binh cong
        5. xoa phan tu
        6. tim phan tu lon thu 2 trong mang
        7. thoat`);
    switch(choice){
        case "1":
            array=[];
            let inputNumber=+prompt("nhap so phan tu muon nhap");
            for(let i=0; i<inputNumber; i++){
                array[i]=+prompt("nhap phan vi tri " + (i+1));
            }
            break;
        case "2":
            console.log(array);
            break;
        case "3":
            let oddArr=[];
            let evenArr=[];
            for(i=0; i<array.length; i++){
                if(array[i]%2==0){
                    evenArr.push(array[i]);
                } else{
                    oddArr.push(array[i]);
                }
            }
            console.log("cac phan tu chan: " + evenArr);
            console.log("cac phan tu le la: " + oddArr);
            break;
        case "4":
            let sum=0;
            for(i=0; i<array.length; i++){
                sum+=array[i];
            }
            console.log("trung binh cong cac phan tu: " + (sum/array.length).toFixed(2));
            break;
        case "5":
            let deleteIndex=+prompt("nhap vi tri muon xoa");
            array.splice(deleteIndex-1,1);
            break;
        case 6: 
            array.sort();
            console.log("phan tu lon thu 2: " + array[array.length-2]);
            break;
        case "7":
            console.log("da thoat chuong trinh");
            break;
    }
} while(choice!=="7");
    