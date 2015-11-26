function isPrimeNumber(a){
　　　var divisor_count=0;

　　　if(!isNaN(a) && a > 1){
　　　　　　for(var b=2; b<a; b++){
　　　　　　　　　if(a % b === 0){
　　　　　　　　　　　　divisor_count++;
　　　　　　　　　}
　　　　　　}

　　　　　　if(divisor_count == 0){
　　　　　　　　　return true;
　　　　　　}else{
　　　　　　　　　return false;
　　　　　　}

　　　}else{
　　　　　　return false;
　　　}
}
