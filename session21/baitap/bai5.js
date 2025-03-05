for(i=0; i<=100; i++){
    if(i%5==0 && i%3==0){
        document.write("fizzbuzz ");
    } else if(i%5==0){
        document.write("buzz ");
    } else if(i%3==0){
        document.write("fizz ");
    } else{
        document.write(i + " ");
    }
}
