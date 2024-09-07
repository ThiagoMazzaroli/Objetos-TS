import prompt from 'prompt-sync'
class pokemon{
    constructor(public nome: string,
                public ataque: number,
                public defesa: number,
                public vida: number){}
};

const pikachu: pokemon = new pokemon("Pikachu", 25, 15, 100)
const charmander: pokemon = new pokemon("Charmander", 35, 10, 100)

var opcao:number  = 0;

while(opcao != 5){
console.log('==========pokemon==========')
console.log('|   1- treinar            |')
console.log('|   2- listar pokemons    |')
console.log('|   3- listar atributos   |')
console.log('|   4- sair               |')
console.log('===========================')

const teclado = prompt()


opcao = +teclado('escolha uma opção:')

switch (opcao){
    case 1:
        pikachu.ataque += 5;
        pikachu.defesa += 5;
        pikachu.vida += 5;
    break;
    case 2:
        console.log('==========Seus pokemons==========')
        console.log('|   1- pikachu                  |')
        console.log('|   2- charmander               |')
        console.log('=================================')
    break;
    case 3:
        console.log(pikachu)
    break;

    case 4:
        console.log('saindo...')
    break;
}
}