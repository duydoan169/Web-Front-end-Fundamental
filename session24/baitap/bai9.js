let str = "";
let leave;

do {
    let choice = +prompt(`
        === Menu ===
        1. Nhập chuỗi ký tự
        2. Hiển thị chuỗi ký tự
        3. Đếm số lượng các ký tự là chữ và số trong chuỗi
        4. Chuyển đổi ký tự viết hoa ↔ viết thường
        5. Trộn lẫn chuỗi gốc với chuỗi khác
        6. Tách chuỗi thành các từ và sắp xếp theo độ dài
        7. Thoát chương trình
        Nhập lựa chọn của bạn:
    `);

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi ký tự:");
            alert("Đã nhập chuỗi thành công!");
            break;

        case 2:
            alert(str ? "Chuỗi hiện tại: " + str : "Chuỗi hiện tại đang rỗng.");
            break;

        case 3:
            if (!str) {
                alert("Chuỗi hiện tại đang rỗng.");
            } else {
                let letters = 0, numbers = 0;
                for (let char of str) {
                    if (!isNaN(char) && char !== " ") {
                        numbers++;
                    } else if (char.toLowerCase() !== char.toUpperCase()) {
                        letters++;
                    }
                }
                alert(`Số ký tự là chữ: ${letters}, Số ký tự là số: ${numbers}`);
            }
            break;

        case 4:
            if (!str) {
                alert("Chuỗi hiện tại đang rỗng.");
            } else {
                let convertedStr = "";
                for (let char of str) {
                    convertedStr += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
                }
                alert("Chuỗi sau khi chuyển đổi: " + convertedStr);
            }
            break;
        case 5:
            if (!str) {
                alert("Chuỗi hiện tại đang rỗng.");
            } else {
                let str2 = prompt("Nhập chuỗi thứ 2:");
                let mixedStr = "";
                let maxLength = Math.max(str.length, str2.length);
                for (let i = 0; i < maxLength; i++) {
                    if (i < str.length) mixedStr += str[i];
                    if (i < str2.length) mixedStr += str2[i];
                }
                alert("Chuỗi sau khi trộn: " + mixedStr);
            }
            break;

        case 6:
            if (!str) {
                alert("Chuỗi hiện tại đang rỗng.");
            } else {
                let words = str.split(" ").sort((a, b) => a.length - b.length);
                alert("Các từ sau khi sắp xếp theo độ dài: " + words.join(", "));
            }
            break;

        case 7:
            alert("Thoát chương trình.");
            break;
    }
} while (leave !== 7);
