const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [

        { name: "Nguyễn Văn Luận", position: "Developer" },

        { name: "Nguyễn Văn Hoàng", position: "Tester" },

        { name: "Hoàng Nam Cao", position: "Manager" }

    ],
};
for(i=0;i<company["employees"].length; i++){
    console.log("ten cong ty: ", company["name"]);
    console.log("vi tri: ", company["location"]);
    console.log("ten nhan vien: ", company.employees[i].name);
    console.log("vi tri: ", company.employees[i].position);
    console.log("");
}