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

class User implements Account {
    key: number;
    amount: number;
    movements: number[];

    constructor(key: number) {
        this.key = key;
        this.movements = [0];
        this.amount = 10000;
    }
}
interface Account {
    movements?: number[];
};

interface Options {
    optionOne: string,
    optionTwo: string,
}

let optionsATM: Options = {
    optionOne: "Retirar Dinero",
    optionTwo: "Ver Saldo disponible",
}


function main() {
    const user = new User(5544);
    
    withdrawMoney(5000, user)
    seeAvailableBalance(user);
}

function seeAvailableBalance(user) {
    console.log("Movimientos", user.movements + "\n" + "Saldo disponible:" + user.amount );
}

function withdrawMoney(money: number, user: User): User {
    if (user.amount != 0) {

        if (user.amount < money) {
            console.log("No tiene saldo suficiente" + "\n" + `Su saldo actual es de ${user.amount}`);
        } else {
            user.amount - money;
            user.amount = user.amount - money;
            user.movements.push(money);

            // imprimir en forma de lista
            console.log("Extracción exitosa", money + "\n" + "Último movimiento", user.movements);
            return user;
        }

    } else {
        console.log("No tiene saldo suficiente")

    }

}

main();

