class User {
    key: number;
    amount: number = 10000;

    constructor(key: number, amount: number)  {
        this.key = key;
        this.amount = amount;
    }

}
class Account {
    movements: number;
    money: number;
}

export { User, Account };