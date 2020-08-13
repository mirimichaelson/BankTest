const DateOfTransaction = require('./dateOfTransaction.js');

beforeEach(() => {
    dateOfTransaction = new DateOfTransaction;
  });

test('', () => {
   expect(dateOfTransaction.date()).toBe('13/08/2020');
 });
 