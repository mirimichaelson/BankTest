var moment = require('moment'); // require
moment().format(); 

const DateOfTransaction = require('./dateOfTransaction.js');

beforeEach(() => {
  dateOfTransaction = new DateOfTransaction;
  });

test('expect date of transaction to be todays date', () => {
   expect(dateOfTransaction.date()).toBe(moment().format('D/MM/YYYY'));
 });
 