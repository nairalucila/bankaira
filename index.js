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
var User = /** @class */ (function () {
    function User(key) {
        this.key = key;
        this.movements = 0;
        this.amount = 10000;
    }
    return User;
}());
function main() {
    var user = new User(5544);
    //FALTAN LAS OPCIONES
    withdrawMoney(2000, user); //-> VER QUE INGRESE EL USUARIO EL DATO
    console.log(user);
    //  seeAvailableBalance(user);
}
function seeAvailableBalance(user) {
    console.log(user.amount);
}
// //cambiar nombre funcion
// function ingressBox(){
// }
//cambiar nombre funcion
function withdrawMoney(money, user) {
    if (user.amount != 0) {
        if (user.amount < money) {
            console.log("No tiene saldo suficiente", "Su saldo actual es de " + user.amount);
        }
        else {
            var extraction = user.amount - money; // = 8000
            user.amount = user.amount - money;
            user.movements = money;
            console.log("Extracción exitosa", money);
            console.log(user.amount);
            return user;
        }
    }
    else {
        console.log("No tiene saldo suficiente");
    }
}
main();
