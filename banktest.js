class BankAccount {
    constructor () {
    this.balance = 0
    }

    deposit(money) {
    this.balance += money;
    }

    statement() {  
    return this.balance;
    }
}

module.exports = BankAccount;

