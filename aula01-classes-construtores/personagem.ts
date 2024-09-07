
//classe
class personagem{
    constructor(public nome: String,
           public energia: Number,
           public vida: Number,
           public ataque: Number,
           public defesa: Number ){
    }
};

let hulk:personagem = new personagem("hulk", 50, 100, 10, 20);

console.log(hulk)



let homemAranha:personagem = new personagem("homemAranha", 50, 100, 10, 20);

console.log(homemAranha);
