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
Question 2: **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()


    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application
*/

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

//Answer (A)
function signUp(user){
    let existingUser = false;

    for(let i = 0; i < users.length; i++){
        if(users[i].email === user.email){
            existingUser = true;
            break;
        }
    }

    if(existingUser){
        console.log('User Exists');
    } else{
        users.push(user);
        console.log('New User Added');
    }
}

const newUser = {
    _id: 'jd930r',
    username: 'Jane',
    email: 'jane@jane.com',
    password: '123456',
    createdAt: '08/02/2020 11:00 AM',
    isLoggedIn: true
};
signUp(newUser);
   
  // (B)

  function signIn(email, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        users[i].isLoggedIn = true;
        console.log(alert('Welcome'));
        return;
      }
    }
    console.log('Invalid email or password.');
  }
  

/*
Question 3: 
*/

//Answer (A)
function rateProduct(productId, userId, rating, products) {
    function findProduct(p) {
      return p._id === productId;
    }
    
    function findUserRating(r) {
      return r.userId === userId;
    }
    
    // Find the product with the given productId
    let product = products.find(findProduct);
    
    // If product is not found, return undefined
    if (!product) {
      return undefined;
    }
    
    // Check if the user has already rated this product
    let userRating = product.ratings.find(findUserRating);
    
    // If user has already rated, update the existing rating
    if (userRating) {
      userRating.rate = rating;
    } else {
      // If user has not already rated, add a new rating to the ratings array
      product.ratings.push({ userId: userId, rate: rating });
    }
    
    // Return the updated product
    return product;
}
rateProduct('eedfcf', 'zwf8md', 4.0, products);
console.log(products[0].ratings);

 //(B)
 function averageRating(productId, products) {
    let sum = 0;
    let count = 0;
  
    products.forEach((product) => {
      if (product._id === productId && product.ratings.length > 0) {
        product.ratings.forEach((rating) => {
          sum += rating.rate;
          count++;
        });
      }
    });
  
    if (count === 0) {
      return undefined;
    }
  
    return sum / count; //or
    return (sum / count).toFixed(1); // return the result rounded to 1 decimal place using the toFixed() method.
}
// Call averageRating to get the average rating of a product
let avgRating = averageRating('eedfcf', products);

// Log the average rating to the console
console.log('Average rating:', avgRating);

  
  

/*
Question 4: 
*/