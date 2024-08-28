console.log('Trabalhando com listas');
const listaDestinos = new Array('Salvador', 'Sao Paulo', 'Rio de Janeiro');
listaDestinos.push(`Curitiba`) //adicionando um item na lista 

listaDestinos.splice(1,1); //para deletar itens
//Precisaremos declarar a quantidade de itens a serem deletados e a posição inicial para que a remoção seja feita. São Paulo encontra-se na segunda posição da lista, (1) e é este elemento que desejamos remover.

console.log("Destinos possiveis:");
console.log(listaDestinos);
console.log(listaDestinos[1], listaDestinos[0]);

