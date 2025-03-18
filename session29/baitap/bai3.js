let array=[];
let choice=0;
do{
    choice=+prompt(`
        1. them mon an
        2. xoa mon an theo ten
        3. cap nhat thong tin theo ten mon an
        4. hien thi menu
        5. tim kiem mon an theo ten
        6. thoat`)
    switch(choice){
        case 1:
            addMenu(array);
            break;
        case 4:
            printMenu(array);
            break;
        case 5:
            searchMenu(array);
            break;
        case 3:
            updateMenu(array);
            break;
        case 2:
            deleteMenu(array);
            break;
        case 6:
            console.log("da thoat chuong trinh");

    }
} while(choice != 6);
function addMenu(array){
    let name = prompt("nhap ten mon an");
    let price = prompt("nhap gia mon an");
    let description = prompt("nhap mo ta mon an");
    Menu={
        name: name,
        price: price,
        description: description
    }
    array.push(Menu);
    console.log("them mon an thanh cong");
}
function printMenu(array){
    if(array.length==0){
        console.log("menu trong");
    } else{
        console.log("menu:");
        console.log(array);
    }
}
function searchMenu(array){
    let find=prompt("nhap ten mon an muon tim");
    let foundMenu=array.filter(item => item.description.includes(find));
    if(foundMenu.length==0){
        console.log("khong ton tai mon an voi ten nay");
    } else{
        console.log(foundMenu);
    }
}
function updateMenu(array){
    let find=prompt("nhap ten mon an muon sua");
    let foundMenu=array.findIndex(item => item.name == find);
    if(foundMenu==-1){
        console.log("khong ton tai mon an voi ten nay nay");
    } else{
        console.log("thong tin cu");
        console.log(array[foundMenu]);
        let name = prompt("nhap ten mon an");
        let price = prompt("nhap gia mon an");
        let description = prompt("nhap mo ta mon an");
        Menu={
            name: name,
            price: price,
            description: description
        }
        array.splice(foundMenu, 1, Menu);
        console.log("sua mon an thanh cong");
    }
}
function deleteMenu(array){
    let find=prompt("nhap ten mon an muon xoa");
    let foundMenu=array.findIndex(item => item.name == find);
    if(foundMenu==-1){
        console.log("khong ton tai mon an voi ten nay");
    } else{
        array.splice(foundMenu, 1);
        console.log("xoa mon an thanh cong");
    }
}