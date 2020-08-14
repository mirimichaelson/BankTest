### BankTechTest

## To run 

To see the BankAccount in action, run 
```
node
``` 
in your terminal.

From there, you'll need to require the file in the node playground:

``` 
var BankAccount = require('./bankAccount.js');
```

and create a new instance of our BankAccount class:

```
var account = new BankAccount
```

From there, you can call methods of deposit, withdraw & print statement to see the code in action!


## How does this program work?

The program works by creating a class of BankStatement. When you create an instance of this class, there are several variables created which track the current balance, credit amount when you deposit,  debit amount when you withdraw, and create the initial statement which will be added to. 

Within this class, there are methods which allow you to deposit money and withdraw money. Each time you do this,  the current balance + credit/debit tracker will be altered accordingly, and a method of 'addLineToBankStatement' is called. 

Within the 'addLineToBankStatement' method, a new instance of dateOfTransaction is created (this class lives in another file, and uses Momentjs to return the current date). Calling dateOfTransaction will allow us to interpolate the date for each transaction. 

The if statement pushes all the info into 'unformattedStatement', and helps to format each line of the statement, interpolate information into it, and make sure that empty credit/debit sections are left blank. One this push to unformatted statement has occurred, the credit and debit trackers are reset to 0.

When a user asks to print their statement, their statement will first go to 'formatStatement' function, which will add a break before each line, and save the results to 'formattedStatement'.

FormattedStatement is then returned by the printStatement function. 

## Testing

To run Jest tests, run  
```
yarn jest
```

To see Jest test coverage, run
```
yarn jest --coverage
```

To see ESLint coverage, run 
```
yarn lint
```

## Thoughts / Methodology

I decided to challenge myself with the BankTechTest by both (finally) converting to VSCode, writing in JS, and picking up the Jest testing framework.

While some elements were tricky to pick up, and a little frustrating at times ((I'm looking at you, date mocking)), I feel like I've learnt & solidified knowledge through the process of writing this code.

Thank you for taking the time to look :) 