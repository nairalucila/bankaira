"use strict";
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
exports.__esModule = true;
var classes_1 = require("./Class/classes");
function main() {
    var user = new classes_1.User(5544, 10000);
    seeAvailableBalance(user);
}
function seeAvailableBalance(user) {
    console.log(user);
}
main();
