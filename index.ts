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


function main() {
    const user = new User(5544);
    
    withdrawMoney(2000, user)
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

            console.log("Extracción exitosa", money);
            return user;
        }

    } else {
        console.log("No tiene saldo suficiente")

    }

}

main();

