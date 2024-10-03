# JavaScript Objects

#### Exploring Objects and Math in JavaScript
**Objective: The objective of this assignment is to enhance proficiency in working with JavaScript objects and utilizing the Math class for mathematical operations.**

#### Problem Statement: 
**You are tasked with developing a JavaScript program that simulates a simple banking application. The program should allow users to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.**

**Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.**

**Task 2: Implement methods within the Account object to deposit and withdraw funds.**

**Task 3: Create a method to calculate compound interest based on the balance and specified interest rate. Allow users to pass a year parameter to your method that represents the # of years the money has been invested and an interest rate. The output should be rounded up to the nearest whole number (perhaps using the Math.ceil()). The formula for compound interest is...**

### A=P(1+nr​)^nt

**Where:**

# 𝐴
 **is the amount of money accumulated after n years, including interest.**
# 𝑃
 **is the principal amount (the initial sum of money).**
# 𝑟
 **is the annual interest rate (in decimal form).**
# 𝑛
 **is the number of times interest is compounded per year (you can use 1 for this example).**
# 𝑡
 **is the number of years the money is invested or borrowed for (this will be your parameter passed into the method).**
 <br><br>

 #### Depositing Function:

 ```
   // Adding a value to an existing property (balance)
    function deposit(account, amount) {
        account.balance += amount;
      }
      
      // Create an account object
      let myAccount = {
        name: "Zab Test",
        balance: 1000
      };
      
      // depositing 1000 to the account
      deposit(myAccount, 1000);
      deposit(myAccount, 500); // Account balance will be 2500

      // Display the (deposit) money amount
      console.log(myAccount); // { name: "Zab test", balance: 1000 }
```
#### Withdrawing Function:
```
// Function to (withdraw) money from an account
      function withdraw(account, amount) {
        if (amount <= 0) {
          return "Invalid withdrawal amount. Please enter a positive value.";
        }
        
        // Check if there are sufficient funds in the account to make the withdrawal
        if (account.balance >= amount) {
          account.balance -= amount;
          return "Withdrawal successful. New balance: " + account.balance;
        } else {
          return "Insufficient funds for withdrawal.";
        }
      }
      
      // Withdraw 200 from the account (balance)
      const Account = { balance: 1000 };
      const withdrawalMessage = withdraw(myAccount, 200);
      console.log(withdrawalMessage); // Output: "Withdrawal successful. New balance: 2300"
```
#### Calculating Compound Interest:
```
      // Function to calculate compound interest
      function calculateCompoundInterest(p, r, t) {
        const n = 1; // the number of times interest is compounded per year (1)
        const amount = p * Math.pow((1 + r / n), n * t);
        return Math.ceil(amount); // Rounding up to the nearest whole number
      }
      
      // Calculate compound interest with initial sum of $1000, annual interest rate of 5%, and 10 years
      const p = 1000; // Initial sum of money
      const r = 0.05; // Annual interest rate (5%)
      const t = 10; // Number of years
      
      console.log(calculateCompoundInterest(p, r, t)); // Outputs the compound interest
```
### Helpful Sites:
https://www.thecalculatorsite.com/finance/calculators/compoundinterestcalculator.php

https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php

https://www.w3schools.com/js/js_objects.asp