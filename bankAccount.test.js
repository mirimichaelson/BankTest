const BankAccount = require('./bankAccount.js');
jest.mock('moment', () => () => ({format: () => '23/02/1996'}));



beforeEach(() => {
  bankAccount = new BankAccount;
});


 test('client deposits 500, resulting bank statement has final balance of 500', () => {
   bankAccount.deposit(500);
   expect(bankAccount.printStatement()).toContain("23/02/1996 || 500.00 || || 500.00");
 });

 test('client deposits 1000, resulting bank statement has final balance of 1000', () => {
   bankAccount.deposit(1000);
   expect(bankAccount.printStatement()).toContain("23/02/1996 || 1000.00 || || 1000.00");
});

 test('client deposits 500, then withdraws 200 resulting bank statement has final balance of 300', () => {
   bankAccount.deposit(500);
   bankAccount.withdraw(200);
   expect(bankAccount.printStatement()).toContain("23/02/1996 || || 200.00 || 300.00");
});


  test('statement includes correct formatting for date/credit/debit/balance', () => {
   expect(bankAccount.printStatement()).toContain("date || credit || debit || balance");
});

