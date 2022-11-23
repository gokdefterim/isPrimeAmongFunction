function isPrimeAmong(num1, num2){

    var iList = [];
    var jList = [];
    var divisors = [];

    for (let i=num1; i>0; i--){
        num1%i == 0 ? iList.push(i) : false;
    }

    for (let j=num2; j>0; j--){
        num2%j == 0 ? jList.push(j) : false;
    }

    iList.forEach((greatest) =>{
        jList.includes(greatest)==true ? divisors.push(greatest) : false;
    })
    
    if(divisors.length==1){
        console.log(true);
    }
    else{
        console.log(false);
        console.log('These numbers are not a prime among because of divisibility by '+ divisors[0]);
    }

}