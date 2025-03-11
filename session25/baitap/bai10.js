function menuShow(array){
    for(i=0; i<array.length; i++){
        console.log("ten: " + array[i][0] + "; so luong con lai: " + array[i][1] + "; gia: " + array[i][2]);
    }
    console.log("");
}
function buy(a, cart, product){
    if(a==cart[0][0] && product[0][1]>0){
        cart[0][1]+=1;
        product[0][1]-=1;
    } else if(a==cart[1][0] && product[1][1]>0){
        cart[1][1]+=1;
        product[1][1]-=1;
    } else if(a==cart[2][0] && product[2][1]>0){
        cart[2][1]+=1;
        product[2][1]-=1;
    } else if(a==cart[3][0] && product[3][1]>0){
        cart[3][1]+=1;
        product[3][1]-=1;
    } else{
        console.log("khong hop le");
        
    }
}
function cartShow(array){
    console.log("hoa don");
    for(i=0; i<array.length; i++){
        console.log("ten: " + array[i][0] + "; so luong mua: " + array[i][1] + "; gia: " + array[i][2]);
    }
    console.log("");
}
function calcMoney(cart){
    return (cart[0][1]*cart[0][2] + cart[1][1]*cart[1][2] + cart[2][1]*cart[2][2] + cart[3][1]*cart[3][2]);
}
let products = [["mi tom", 5, 5000], ["banh mi", 12, 15000], ["banh bao", 5, 8000], ["men men", 30, 20000]];
let cart = [["mi tom", 0, 5000], ["banh mi", 0, 15000], ["banh bao", 0, 8000], ["men men", 0, 20000]];
let sum=0;
let choice;
do{
    choice=+prompt(`
        1. hien thi san pham trong cua hang
        2. chon san pham de mua
        3. hien thi hoa don va tinh tong tien
        4. thoat`);
        switch(choice){
            case 1:
                menuShow(products);
                break;
            case 2:
                let input=prompt("nhap san pham muon mua");
                buy(input, cart, products);
                break;
            case 3:
                cartShow(cart);
                console.log("tong tien: " + calcMoney(cart));
                break;
            case 4: 
                console.log("da thoat chuong trinh");
                
        }
} while(choice!=4);