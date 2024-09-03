function contarLetraA(str) {
    let contador = 0;

    
    for (let i = 0; i < str.length; i++) {
        // Verifica se o caractere é 'a' ou 'A'
        if (str[i] === 'a' || str[i] === 'A') {
            contador++;
        }
    }

    
    return contador;
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Informe uma string: ', (input) => {
    const ocorrencias = contarLetraA(input);

    console.log(`A letra 'a' (maiúscula ou minúscula) ocorre ${ocorrencias} vezes na string.`);
    readline.close();
});
