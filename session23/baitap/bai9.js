let array=[];
let choice;
do{
    choice=prompt(`
        1. Nhap vao mang
        2. Hien thi mang
        3. Hien thi phan tu chan va tinh tong
        4. hien thi phan tu lon nhat va nho nhat
        5. hien thi so nguyen to va tinh tong
        6. tim so luong phan tu
        7. Them phan tu 
        8. thoat`);
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
            let even=[];
            let evenSum=0;
            for(i=0; i<array.length; i++){
                if(array[i]%2==0){
                    even.push(array[i]);
                    evenSum+=array[i];
                }
            }
            console.log("cac phan tu chan: " + even);
            console.log("tong cac phan tu chan: " + evenSum);
            break;
        case "4":
            let sortedArr=array.sort();
            console.log("phan tu lon nhat la " + sortedArr[sortedArr.length-1]);
            console.log("phan tu nho nhat la " + sortedArr[0]);
            break;
        case "5":
            let primeSum=0;
            let primeArr=[];
            for(i=0; i<array.length; i++){
                let check=0;
                for(j=2; j<array[i]**(1/2); j++){
                    if(array[i]%j==0){
                        check++;
                        break
                    }
                }
                if(check==0 && array[i]!=1){
                    primeArr.push(array[i]);
                    primeSum+=array[i];
                }
            }
            console.log("cac so nguyen to la: " + primeArr);
            console.log("tong cac to nguyen to la: " + primeSum);
            break;
        case "6":
            let search=+prompt("nhap phan tu muon tim");
            count=0;
            for(i=0; i<array.length; i++){
                if(array[i]==search){
                    count++;
                }
            }
            console.log("phan tu " + search + " xuat hien " + count + " lan");
            
            break;
        case "7":
            let addValue=+prompt("nhap phan tu muon them");
            let addIndex=+prompt("nhap vi tri muon them");
            array.splice(addIndex-1,0,addValue);
            break;
        case "8":
            console.log("da thoat chuong trinh");
            break;
    }
} while(choice!=="8");
    