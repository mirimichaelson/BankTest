const DateOfTransaction = require('./dateOfTransaction.js');

class BankAccount {
    constructor () {
      this.currentBalance = 0
      this.creditAmount = 0
      this.debitAmount = 0
      this.unformattedStatement = ["date || credit || debit || balance"];
      this.formattedStatement = []
    }   

    deposit(money) {
      this.currentBalance += money;
      this.creditAmount += money;
      this.addToBankStatement();
     }
    
    withdraw(money) {
      this.currentBalance -= money;
      this.debitAmount += money;
      this.addToBankStatement();
    };

    addToBankStatement() {
      this.dateOfTransaction = new DateOfTransaction

      if (this.creditAmount == 0){
        this.unformattedStatement.push([`${this.dateOfTransaction.date()} || || ${this.debitAmount}.00 || ${this.currentBalance}.00`])
      } else { 
        this.unformattedStatement.push([`${this.dateOfTransaction.date()} || ${this.creditAmount}.00 || || ${this.currentBalance}.00`])
      }
     
      this.creditAmount = 0
      this.debitAmount = 0
    }  

    formatStatement() {
      this.unformattedStatement.forEach(line => 
      this.formattedStatement.push(`\n${line}`)
    );
    }

    printStatement() { 
      this.formatStatement() 
      return `${this.formattedStatement}`;
    }
}

module.exports = BankAccount;