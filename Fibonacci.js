function numFibonacci(num) {
    
    let a = 0, b = 1;

    if (num === 0 || num === 1) return true;

   
    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }

   
    return b === num;
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Informe um número: ', (input) => {
    const numero = parseInt(input);

    if (numFibonacci(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }

    readline.close();
});
