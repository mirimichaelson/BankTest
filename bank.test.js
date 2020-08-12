const BankAccount = require('./banktest.js');

 test('client deposits 500, resulting bank statement includes 500', () => {
   let bankAccount = new BankAccount
   bankAccount.deposit(500)

   expect(bankAccount.statement()).toContain(500);
 });
