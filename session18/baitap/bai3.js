let username = prompt("Mời bạn nhập tên đăng nhập: ");
let pass;
if(username == "ADMIN"){
    pass = prompt("mời bạn nhập mật khẩu: ");
    if (pass="TheMaster") {
        document.write("Welcome");
    }
    else if (pass == '') {
        document.write("Cancelled");
    } else {
        document.write("Wrong password");
    }
}
else if(username ==''){
    document.write("Cancelled");
}
else{
    document.write("I Don’t know you");
}