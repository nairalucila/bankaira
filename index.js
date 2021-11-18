var User = /** @class */ (function () {
    function User(key) {
        this.key = key;
        this.movements = [0];
        this.amount = 10000;
    }
    return User;
}());
;
function main() {
    var user = new User(5544);
    withdrawMoney(2000, user);
    seeAvailableBalance(user);
}
function seeAvailableBalance(user) {
    console.log("Movimientos", user.movements + "\n" + "Saldo disponible:" + user.amount);
}
function withdrawMoney(money, user) {
    if (user.amount != 0) {
        if (user.amount < money) {
            console.log("No tiene saldo suficiente" + "\n" + ("Su saldo actual es de " + user.amount));
        }
        else {
            user.amount - money;
            user.amount = user.amount - money;
            user.movements.push(money);
            console.log("Extracción exitosa", money);
            return user;
        }
    }
    else {
        console.log("No tiene saldo suficiente");
    }
}
main();
