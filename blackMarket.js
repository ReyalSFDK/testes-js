const _user = {
    name: "",
    side: "",
    amount: 0,
    inventory: [],
}

const _sides = {
    ct: "CT",
    tr: "TR",
    bt: "BOTH",
}

const _type = {
    equip: "EQUIPMENT",
    pistol: "PISTOL",
    heavy: "HEAVY",
    sub: "SUB",
    rifle: "RIFLE",
    grenade: "GRENADE",
}
 
class Item {
    constructor(nome, value, categoria, side) {
        this.nome = nome;
        this.value = value;
        this.categoria = categoria;
        this.side = side;
    }
}

const _rifle = [
    new Item('Ak-47', 2700, _type.rifle, _sides.tr),
    new Item('M4A4', 3100, _type.rifle, _sides.ct),
    new Item('SGG',2750, _type.rifle,_sides.tr ),
    new Item('Awp',4700, _type.rifle,_sides.bt ),
]
const _pistol = [
    new Item('Glock-18', 200, _type.pistol, _sides.tr),
    new Item('Usp', 200, _type.pistol, _sides.tr),
    new Item('Tec-9',500, _type.pistol,_sides.tr ),
    new Item('Five-Seven',500, _type.pistol,_sides.ct ),
    new Item('P2000',200, _type.pistol,_sides.ct ),
    new Item('P250',300, _type.pistol,_sides.bt ),
]
 



function tryBuy(item) {
    console.log(item, _user);
    
    if (_user.side == item.side || item.side == _sides.bt) {
        if (_user.amount >= item.value) {
            _user.amount -= item.value;
            _user.inventory.push(item); 
            console.log(_user.inventory) 
        }else{
            window.alert("Você não tem saldo suficiente para comprar o item")
        }
    } else {
        window.alert("Este item não pertence ao seu lado");
    }
}
 


const ak = new Item("AK-47", 2700, _type.rifle, _sides.tr);
const glock = new Item("Glock-18", 200, _type.pistol, _sides.tr);

const nomeCategoria=[
    "pistolas",
    "Rifles"
]
const market = [
    _pistol,
    _rifle
]

// Exec
_user.name=prompt("Digite seu nome")

let wrongChoice = true;

let inputChoice = "";
let erro = "";

while (wrongChoice) {
    inputChoice = +prompt(`Qual lado? 0 (TR) ou 1 (CT) ${erro}`);
    if (inputChoice === 1) {
        _user.side = _sides.ct;
        break;

    } else if (inputChoice === 0) {
        _user.side = _sides.tr;
        break;
    }
    erro = "Opção inválida";
}

_user.amount = +prompt("Qual sua quantia em dinheiro?")

let buying = true
while (buying){
    wrongcat = true
    buycat = +prompt(`Escolha a categoria de itens ${nomeCategoria.map((nome, i) => `(${i}) ${nome}`)} (99) Fechar`);
    if (buycat == 99) break;
    if (!!nomeCategoria[buycat]) {
        wrongItem = true;
        buyItem = +prompt(`Escolha uma arma
            ${market[buycat].map((item, i) => `(${i}) ${item.nome}`)}
        `);
        if(!!market[buycat][buyItem]){
            tryBuy(market[buycat][buyItem]);
        } else{
            //arma ivalida
        }
    } else {
        //categoria invalida
    } 
}
