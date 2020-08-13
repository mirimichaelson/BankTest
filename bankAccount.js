const DateOfTransaction = require('./dateOfTransaction.js');

class BankAccount {
    constructor () {
    this.currentBalance = 0
    this.bankStatement = [
    // ["date || credit || debit || balance"]
    ];
    }   

    deposit(money) {
    this.currentBalance += money;
    
    }

    withdraw(money) {
    this.currentBalance -= money;
    }
    

    statement() {  
    // "|| || || ${this.currentBalance}"
    return this.currentBalance;
    }
}

// 14/01/2012 || || 500.00 || 2500.00


module.exports = BankAccount;

