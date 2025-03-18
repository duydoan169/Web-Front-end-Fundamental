let courses = [];
let users = [];

function main() {
    let running = true;
    while (running) {
        let choice = Number(prompt(
            "1. Quản lý khóa học\n" +
            "2. Quản lý người dùng\n" +
            "3. Thoát"
        ));
        switch (choice) {
            case 1:
                manageCourses();
                break;
            case 2:
                manageUsers();
                break;
            case 3:
                running = false;
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}

main();

function manageCourses() {
    let running = true;
    while (running) {
        let choice = Number(prompt(
            "1. Thêm khóa học\n" +
            "2. Tìm kiếm khóa học\n" +
            "3. Xóa khóa học\n" +
            "4. Xem danh sách khóa học\n" +
            "5. Thoát"
        ));
        switch (choice) {
            case 1:
                addItem(courses, "course");
                break;
            case 2:
                searchCourse();
                break;
            case 3:
                deleteCourse();
                break;
            case 4:
                listCourses();
                break;
            case 5:
                running = false;
                break;
        }
    }
}

function manageUsers() {
    let running = true;
    while (running) {
        let choice = Number(prompt(
            "1. Thêm người dùng\n" +
            "2. Đăng ký khóa học\n" +
            "3. Hủy đăng ký khóa học\n" +
            "4. Xem khóa học đã đăng ký\n" +
            "5. Thoát"
        ));
        switch (choice) {
            case 1:
                addItem(users, "user");
                break;
            case 2:
                registerCourse();
                break;
            case 3:
                unregisterCourse();
                break;
            case 4:
                listUserCourses();
                break;
            case 5:
                running = false;
                break;
        }
    }
}

function addItem(list, type) {
    let count = getValidNumber("Nhập số lượng:");
    for (let i = 0; i < count; i++) {
        list.push(type === "course" ? createCourse() : createUser());
    }
    alert(`Đã thêm ${count} ${type === "course" ? "khóa học" : "người dùng"} mới.`);
}

function createCourse() {
    return {
        id: generateId(courses),
        name: getValidString("Nhập tên khóa học:"),
        instructor: getValidString("Nhập tên giảng viên:"),
        students: []
    };
}

function createUser() {
    return {
        id: generateId(users),
        name: getValidString("Nhập tên người dùng:"),
        registeredCourses: []
    };
}

function generateId(list) {
    return list.length === 0 ? 1 : list[list.length - 1].id + 1;
}

function getValidString(message) {
    let input;
    do {
        input = prompt(message).trim();
        if (!input) alert("Giá trị không hợp lệ!");
    } while (!input);
    return input;
}

function getValidNumber(message) {
    let number;
    do {
        number = Number(prompt(message));
        if (isNaN(number) || number <= 0) alert("Số không hợp lệ!");
    } while (isNaN(number) || number <= 0);
    return number;
}

function searchCourse() {
    let keyword = getValidString("Nhập tên khóa học cần tìm:").toLowerCase();
    let results = courses.filter(course => course.name.toLowerCase().includes(keyword));

    if (results.length === 0) {
        alert("Không tìm thấy khóa học nào!");
        return;
    }

    let message = "Kết quả tìm kiếm:\n" + results.map(course => `ID: ${course.id} - Tên: ${course.name}`).join("\n");
    alert(message);
}

function deleteCourse() {
    let courseId = getValidNumber("Nhập ID khóa học cần xóa:");
    let index = courses.findIndex(course => course.id === courseId);

    if (index === -1) {
        alert("Không tìm thấy khóa học!");
        return;
    }

    courses.splice(index, 1);
    alert(`Đã xóa khóa học có ID: ${courseId}`);
}

function listCourses() {
    if (courses.length === 0) {
        alert("Không có khóa học nào.");
        return;
    }
    let result = courses.map(course => `${course.id} - ${course.name} - Giảng viên: ${course.instructor}`).join("\n");
    alert(result);
}

function registerCourse() {
    let userId = getValidNumber("Nhập ID người dùng:");
    let courseId = getValidNumber("Nhập ID khóa học:");

    let user = users.find(u => u.id === userId);
    let course = courses.find(c => c.id === courseId);

    if (!user || !course) {
        alert("ID không hợp lệ!");
        return;
    }

    if (user.registeredCourses.includes(courseId)) {
        alert("Bạn đã đăng ký khóa học này!");
        return;
    }

    user.registeredCourses.push(courseId);
    course.students.push(userId);
    alert(`${user.name} đã đăng ký khóa học "${course.name}" thành công!`);
}

function unregisterCourse() {
    let userId = getValidNumber("Nhập ID người dùng:");
    let courseId = getValidNumber("Nhập ID khóa học:");

    let user = users.find(u => u.id === userId);
    let course = courses.find(c => c.id === courseId);

    if (!user || !course) {
        alert("ID không hợp lệ!");
        return;
    }

    let index = user.registeredCourses.indexOf(courseId);
    if (index === -1) {
        alert("Bạn chưa đăng ký khóa học này!");
        return;
    }

    user.registeredCourses.splice(index, 1);
    course.students = course.students.filter(id => id !== userId);

    alert(`${user.name} đã hủy đăng ký khóa học "${course.name}".`);
}

function listUserCourses() {
    let userId = getValidNumber("Nhập ID người dùng:");
    let user = users.find(u => u.id === userId);

    if (!user) {
        alert("ID không hợp lệ!");
        return;
    }

    if (user.registeredCourses.length === 0) {
        alert(`${user.name} chưa đăng ký khóa học nào.`);
        return;
    }

    let enrolledCourses = user.registeredCourses.map(courseId => {
        let course = courses.find(c => c.id === courseId);
        return course ? `${course.id} - ${course.name}` : "";
    }).filter(Boolean).join("\n");

    alert(`Danh sách khóa học của ${user.name}:\n${enrolledCourses}`);
}
