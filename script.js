// Create a function for the book object with properties for title, author and page number
   /* function book(title, author, pageNumber) 
   {
       this.title = title;
       this.author = author;
       this.pageNumber = pageNumber;
       
       // Method to display the book information when toString() is called
       this.toString = function() {
       return `Title: ${this.title}, Author: ${this.author}, Number of Pages: ${this.pageNumber}`;
       };
   }
  
       // Create a book object
       let book1 = new book("Harry Potter and the Sorcerer's Stone", "JK Rowling", "309 pages");

   // Display the book object properties
   document.getElementById("info").innerHTML = "new book: " + book1;
    */


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
      
      

      