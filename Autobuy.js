function autobuy(amount) {
  if (typeof amount !== "number") {
    return 0;
  }
  if (amount < 0) {
    amount = 0;
  } else if (amount < 1000) {
    console.log("Faz eco pow");
  } else if (amount < 2000) {
    amount -= 800;
    console.log("Pistola comprada");
  } else if (amount < 2500) {
    amount -= 1800;
    console.log("Pistola + Colete comprado");
  } else if (amount < 3500) {
    amount -= 2500;
    console.log("Sub + Colete comprado");
  } else if (amount < 4500) {
    amount -= 4100;
    console.log("Rifle + Colete comprado");
  } else {
    amount -= 4500;
    console.log("AWP + Colete comprado")
  }
  return amount;

}

var a = new autobuy();
console.log(a.autobuy("a")=="Esperava aparacer faz um eco")
console.log(a.autobuy(50)==50)
console.log(a.autobuy(1250)==450)
console.log(a.autobuy(2100)==300)