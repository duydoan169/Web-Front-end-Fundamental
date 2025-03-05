let amount = parseInt(prompt("Nhập số tiền cần rút: "), 10);

if (amount % 1000 !== 0) {
    console.log("Số tiền phải chia hết cho 1000!");
} else {
    let b1 = Math.floor(amount / 500000); amount -= b1 * 500000;
    let b2 = Math.floor(amount / 200000); amount -= b2 * 200000;
    let b3 = Math.floor(amount / 100000); amount -= b3 * 100000;
    let b4 = Math.floor(amount / 50000); amount -= b4 * 50000;
    let b5 = Math.floor(amount / 20000); amount -= b5 * 20000;
    let b6 = Math.floor(amount / 10000); amount -= b6 * 10000;
    let b7 = Math.floor(amount / 5000); amount -= b7 * 5000;
    let b8 = Math.floor(amount / 2000); amount -= b8 * 2000;
    let b9 = Math.floor(amount / 1000); amount -= b9 * 1000;

    document.write("Số tờ tiền được rút: <br>");
    if (b1 > 0) document.write("500.000 - " + b1 + " tờ<br>");
    if (b2 > 0) document.write("200.000 - " + b2 + " tờ<br>");
    if (b3 > 0) document.write("100.000 - " + b3 + " tờ<br>");
    if (b4 > 0) document.write("50.000 - " + b4 + " tờ<br>");
    if (b5 > 0) document.write("20.000 - " + b5 + " tờ<br>");
    if (b6 > 0) document.write("10.000 - " + b6 + " tờ<br>");
    if (b7 > 0) document.write("5.000 - " + b7 + " tờ<br>");
    if (b8 > 0) document.write("2.000 - " + b8 + " tờ<br>");
    if (b9 > 0) document.write("1.000 - " + b9 + " tờ<br>");
}
