const BankAccount = require('./banktest.js');

beforeEach(() => {
  bankAccount = new BankAccount;
});


 test('client deposits 500, resulting bank statement includes 500', () => {
    bankAccount.deposit(500);
   expect(bankAccount.statement()).toBe(500);
 });

 test('client deposits 1000, resulting bank statement includes 1000', () => {
  bankAccount.deposit(1000);
 expect(bankAccount.statement()).toBe(1000);
});


