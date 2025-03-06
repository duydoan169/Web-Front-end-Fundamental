let array=[];
let choice;
do{
    choice=prompt(`
        1. Nhap vao mang
        2. Hien thi mang
        3. Them phan tu
        4. Sua phan tu
        5. xoa phan tu
        6. thoat`);
    switch(choice){
        case "1":
            array=[];
            let inputNumber=+prompt("nhap so phan tu muon nhap");
            for(let i=0; i<inputNumber; i++){
                array[i]=prompt("nhap phan vi tri " + (i+1));
            }
            break;
        case "2":
            console.log(array);
            break;
        case "3":
            let addValue=prompt("nhap phan tu muon them");
            let addIndex=+prompt("nhap vi tri muon them");
            array.splice(addIndex-1,0,addValue);
            break;
        case "4":
            let changeIndex=+prompt("nhap vi tri muon sua");
            let changeValue=prompt("nhap phan tu muon sua thanh");
            array.splice(changeIndex-1,1,changeValue);
            break;
        case "5":
            let deleteIndex=+prompt("nhap vi tri muon xoa");
            array.splice(deleteIndex-1,1);
            break;
        case "6":
            console.log("da thoat chuong trinh");
            break;
    }
} while(choice!=="6");
    