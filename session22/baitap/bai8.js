let array = [2,4,3,6,5,8,6,2,4,9];
let maxCount = 0, maxItem = array[0];
for(i=0; i<array.length; i++){
    let count=0;
    for(j=0; j<array.length; j++){
        if(array[i]==array[j]){
            count++;
        }
    }
    if(count>maxCount){
        maxCount=count;
        maxItem=array[i];
    } else if(maxCount==count && maxItem>array[i]){
        maxItem=array[i];
    }
}
document.writeln("so xuat hien nhieu nhat la: " + maxItem);