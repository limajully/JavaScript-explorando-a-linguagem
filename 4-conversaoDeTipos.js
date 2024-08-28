console.log("Conversão de tipos");

console.log("ano + 2022");
//No PowerShell teremos como resultado ano2022.
console.log( parseInt("2" + "2") + parseInt("2" + "2"));//concatenação
//parseInt, este "int" ser refere a um número inteiro.
//Dessa maneira, ao executarmos este arquivo no PowerShel teremos o resultado 44, ou seja, a soma foi realizada, pois o que antes era tido como texto foi lido como valor numérico inteiro.

console.log("10"/"2");
//No caso de divisões, o comportamento do leitor é outro. Veremos que o retorno para este caso é 5, mesmo que não tenhamos realizado uma conversão explícita para números inteiros, afinal uma divisão só faz sentido com elementos numéricos.
console.log("Ricardo" / "2"); //Not a Number
//Para este caso teremos o retorno NaN, que siginfica "not a number", ou seja, não é uma operação possível pois não se trata de númer

console.log("7" / "2");
//Será retornado o valor 3.5, um número com casa decimal ou os chamados "pontos flutuantes". Lembrado que se queremos escrever números com casa decimal, devemos sempre utilizar pontos (.) e não vírgulas:

console.log(6.5);
console.log(6,5);
//Se escrevemos o mesmo valor com vírgula, é lido um espaço no lugar da vírgula, algo como 6 5.