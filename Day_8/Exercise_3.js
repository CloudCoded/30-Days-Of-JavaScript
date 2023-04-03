/*
Question 1: Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
*/

//Answer
const personAccount = {
    firstName: 'Alex',
    lastName: 'Ekubo',
    incomes: [],
    expenses: [],

    totalIncome: function(){
        total = 0;
        for(let i = 0; i < this.incomes.length; i++){
            total += this.incomes[i];
        }
        return total;
    },

    totalExpenses: function(){
        total = 0;
        for(let i = 0; i < this.expenses.length; i++){
            total += this.expenses[i];
        }
        return total;
    },

    accountInfo: function(){
        return `Name ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpenses()}\nAccount Balance: ${this.accountBalance()}`;
    },

    addIncome: function(description, amount){
        this.incomes.push(amount);
    },

    addExpenses: function(description, amount){
        this.expenses.push(amount)
    },

    accountBalance: function(){
        return this.totalIncome() - this.totalExpenses();
    }
}

/*
Question 2: 
*/
/*
Question 3: 
*/
/*
Question 4: 
*/