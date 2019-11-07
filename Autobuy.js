function autobuy(amount) {
  if (amount < 1000) {
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


window.alert(autobuy(0));