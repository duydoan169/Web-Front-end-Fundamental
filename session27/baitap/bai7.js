let array=[3, 4, 6, 7];
findMissing(array);
function findMissing(array){
    let found=-1;
    let missingValue;
    if(Array.isArray(array)){
        let compare=[];
        array.sort();
        for(i=array[0]; i<array[(array.length)-1]; i++){
            compare.push(i);
        }
        for(i=0; i<array.length; i++){
            if(compare[i]+1==array[i]){
                found=1;
                missingValue=compare[i];
                break;
            }
        }
        if(found==1){
            console.log("so bi thieu la: " + missingValue);
        } else{
            console.log("khong co so bi thieu");
        }
    } else{
        console.log("du lieu khong hop le");
    }
}