let array=[];
let choice;
do{
    choice=prompt(`
        1. Nhap vao mang
        2. Hien thi mang
        3. hien thi phan tu lon nhat va nho nhat
        4. tinh tong cac phan tu
        5. tim so luong phan tu
        6. sap xep cac phan tu
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
            let sortedArr=array.sort();
            console.log("phan tu lon nhat la " + sortedArr[sortedArr.length-1]);
            console.log("phan tu nho nhat la " + sortedArr[0]);
            break;
        case "4":
            let sum=0;
            for(i=0; i<array.length; i++){
                sum+=array[i];
            }
            console.log("tong cac phan tu: " + sum);
            break;
        case "5":
            let search=+prompt("nhap phan tu muon tim");
            count=0;
            for(i=0; i<array.length; i++){
                if(array[i]==search){
                    count++;
                }
            }
            console.log("phan tu " + search + " xuat hien " + count + " lan");
            break;
        case 6: 
            array.sort();
            console.log("mang da sap xep: " + array);
            
        case "7":
            console.log("da thoat chuong trinh");
            break;
    }
} while(choice!=="7");
    