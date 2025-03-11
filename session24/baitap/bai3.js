let array=[];
let choice;
do{
    choice=prompt(`
        1. Nhap vao mang
        2. Hien thi mang
        3. Hien thi phan tu lon nhat va chi so
        4. tinh tong va trung binh cong so duong
        5. dao nguoc mang
        6. kiem tra mang doi xung
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
            let maxValue=array[0];
            let maxIndex=0;
            for(i=0; i<array.length; i++){
                if(maxValue<array[i]){
                    maxValue=array[i];
                    maxIndex=i;
                }
            }
            console.log("phan thu lon nhat la: " + maxValue);
            console.log("vi tri phan tu lon nhat la: " + maxIndex);
            break;
        case "4":
            let count=0;
            let sum=0;
            for(i=0; i<array.length; i++){
                if(array[i]>0){
                    sum+=array[i];
                    count++;
                }
            }
            if(count>0){
                console.log("tong cac phan tu duong: " + sum);
                console.log("trung binh cong cac phan tu duong: " + (sum/count).toFixed(2));
            } else{
                console.log("khong co so duong");
            }
            break;
        case "5":
            array.reverse();
            console.log("mang da duoc dao nguoc la: " + array);
            break;
        case "6": 
            let check=0;
            for(i=0; i<=(array.length)/2; i++){
                if(array[i]!=array[array.length-1-i]){
                    check++;
                    break;
                }
            }
            if(check!=0){
                console.log("mang khong doi xung");
            } else{
                console.log("mang doi xung");
            }
            break;
        case "7":
            console.log("da thoat chuong trinh");
            break;
    }
} while(choice!=="7");
    