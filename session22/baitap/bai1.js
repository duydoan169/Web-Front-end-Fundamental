let array=[];
array.push(1);
array.unshift(2);
array.splice(1,0,3);
for (let key of array) {
    document.write(key + " ");
}