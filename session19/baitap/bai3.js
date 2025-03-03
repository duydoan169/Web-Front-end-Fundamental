let vnd;
let usd;
let choice=prompt(`nhap lua chon:
    1. chuyen tu VND --> USD
    2. chuyen tu USD --> VND`);
switch (choice){
    case "1":
        vnd=+prompt("nhap VND");
        usd=(vnd/23000).toFixed(2);
        document.write(usd + " USD");
        break;
    case "2":
        usd=+prompt("nhap USD");
        vnd=(usd*23000).toFixed(2);
        document.write(vnd + " VND");
        break;
    default:
        document.write("nhap lua chon dung!")
}