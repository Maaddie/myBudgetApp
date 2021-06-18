//Create starting values
let monthlyIncome = 0; //Numerical value
let expenses = []; //An array of objects
let expenseTotal = 0; //Numerical value
let balance = 0; //Numerical value

//Create references to form elements
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");
let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");

// Write a function that takes the input from
// monthly budget and displays it in the app
function updateBudget(event) {
console.log("updateBudget fired!");
event.preventDefault();
// Store user input into monthlyIncome
monthlyIncome = parseInt (incomeInput.value);
// Display the value in the app
monthlyBudget.innerText = "$" + monthlyIncome;
//Update the balance
updateBalance();
}

//Add updateBudget to button as onclick handler
updateBudgetButton.onclick = updateBudget; 

//Create reference to remaining app elements
let expenseList = document.getElementById("expense_list"); //DIV
let totalExpenses = document.getElementById("total_expenses"); //Paragraph
let remainingBalance = document.getElementById("remaining_balance"); //Paragraph

//Build a function that compares the monthly budget
// and the total of the expenses, then shows the difference
// in the app
function updateBalance() {
    console.log("updateBalance fired!");
  // Determine balance and display in app
  let balance = monthlyIncome - expenseTotal;
  remainingBalance.innerText = "$" + balance;
  //Change color of remaining balance text based on value
  if (balance < 0) {
      console.log("We're in the red!");
      remainingBalance.classList.remove("green");
      remainingBalance.classList.add("red");
  }else {
      console.log("We're in the green!");
      remainingBalance.classList.add("green");
      remainingBalance.classList.remove("red");
  }
}

//Write a function that adds expenses to the expense array
// based on user input, then updates the expense list
function addExpense(event) {
    console.log("addExpense fired!");
    event.preventDefault();
    //Build expense object
    let expense = {
        name: nameInput.value, //String
        amount: parseInt(amountInput.value) //Number
    };
    //Add the object to the array
    expenses.push(expense);
    //Display the expense in the expense list
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    // Calculate total expenses
    updateExpenseTotal();
}

// Write a function that will loop through the expenses
// and re-calculate the total, then display it in the app
 function updateExpenseTotal(){
     console.log("updateExpenseTotal fired!");
     //Reset total expenses
     expenseTotal = 0;
     // Loop through expenses and re-calculate
     for (let i = 0; i < expenses.length; i++) {
         let currentExpense = expenses[i];
         expenseTotal = expenseTotal + currentExpense.amount;
     }
     //Update the total expenses shown in the app
     totalExpenses.innerText = "$" + expenseTotal;
     //Update remaining balance
     updateBalance();
 }
// Add function as onclick handler to add expense button
addExpenseButton.onclick = addExpense;
