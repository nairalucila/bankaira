/***
 * SIMULADOR CAJERO AUT BANCO
 * 
 * recibe una clave yse la asigna a un usuario X
 * se listan opciones
 * 
 * op 1-ingresar monto - si es mayor a 5000 no te deja, si es menor si y se retira. msj de saludo
 * 
 * op 2- cambiar clave
 * 
 * op 3- ver saldo disponible, va a ser siempre un monto x si retiras plata lo va restando
 * 
 */

import {User, Account} from './Class/classes';

function main (){
    const user = new User(5544, 10000);
    seeAvailableBalance(user);
}

function seeAvailableBalance(user){
console.log(user)
}

function retirarDinero(money: number){
console.log(money);
}

main();

