let num = [5,8,4]
num.push(1) //Adicina um valor e cria a proxima coluna para esse valor
num.sort() //Coloca em ordem crescente todos os elementos
console.log(num)

// num[3] = 6 Adiciona o valor a coluna 3 mesmo ela não existindo
console.log(`O primeiro valor do vetor é  ${num[0]}`)

//num.length - Determina a quantidade de elementos
console.log(`O vetor tem  ${num.length} posições`)

//indexOf - Procura a posição do valor
let pos = num.indexOf(8) 

//Caso não encontre o valor, retorna -1
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
