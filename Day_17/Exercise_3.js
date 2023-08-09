/* Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description. */

// Define the personAccount object with properties and methods
const personAccount = {
    // Properties: firstname and lastname to store person's name,
    // incomes and expenses as Maps to store income and expense descriptions along with amounts
    firstname: "",
    lastname: "",
    incomes: new Map(),
    expenses: new Map(),
  
    // Method to calculate and return the total income
    totalIncome() {
      let total = 0;
      for (const [amount] of this.incomes) {
        total += amount;
      }
      return total;
    },
  
    // Method to calculate and return the total expense
    totalExpense() {
      let total = 0;
      for (const [amount] of this.expenses) {
        total += amount;
      }
      return total;
    },
  
    // Method to generate and return account information
    accountInfo() {
      return `Account Information:\nName: ${this.firstname} ${this.lastname}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nAccount Balance: ${this.accountBalance()}`;
    },
  
    // Method to add an income entry to the incomes Map
    addIncome(description, amount) {
      this.incomes.set(amount, description);
    },
  
    // Method to add an expense entry to the expenses Map
    addExpense(description, amount) {
      this.expenses.set(amount, description);
    },
  
    // Method to calculate and return the account balance (income - expense)
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  // Example usage:
  
  // Set the person's name
  personAccount.firstname = "John";
  personAccount.lastname = "Doe";
  
  // Add income and expense entries using the addIncome and addExpense methods
  personAccount.addIncome("Salary", 5000);
  personAccount.addIncome("Freelance", 1000);
  
  personAccount.addExpense("Rent", 1500);
  personAccount.addExpense("Groceries", 300);
  personAccount.addExpense("Utilities", 200);
  
  // Display the account information using the accountInfo method and log it to the console
  console.log(personAccount.accountInfo());
  