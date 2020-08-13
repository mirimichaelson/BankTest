var moment = require('moment'); // require
moment().format(); 

class DateOfTransaction {
    
  constructor() {
    this.formattedDate = moment().format('D/MM/YYYY');
  }

  date() {
    return this.formattedDate
  }
}

module.exports = DateOfTransaction;
