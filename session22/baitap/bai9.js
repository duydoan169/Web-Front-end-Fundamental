let array=[2,1,7,1,1,8,6,2,2,7];
for(i=0; i<array.length; i++){
    while(array.indexOf(array[i])!=array.lastIndexOf(array[i])){
        array.splice(array.lastIndexOf(array[i]),1);
    }
}
document.writeln(array.sort());