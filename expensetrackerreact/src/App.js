import ExpenseForm from "./Components/ExpenseForm";
import Expense from "./Components/Expense";
import ExpenseFilter from "./Components/ExpenseFilter";
import { useState } from "react";
function App() {
  let expenses = [
    {
      expenseDate: new Date(2020, 2, 10),
      title: "Groceries",
      expenseAmount: 50.0,
      location: "Deoria",
    },
    {
      expenseDate: new Date(2020, 2, 10),
      title: "Dinner",
      expenseAmount: 30.0,
      location: "gorakhpur",
    },
    {
      expenseDate: new Date(2020, 2, 10),
      title: "Gas",
      expenseAmount: 40.0,
      location: "delhi",
    },
    {
      expenseDate: new Date(2020, 2, 10),
      title: "Entertainment",
      expenseAmount: 20.0,
      location: "kanpur",
    },
  ];

  const [expenseItem, setExpense] = useState(expenses);

  function addExpenseHandler(expense) {
    setExpense([...expenses, expense]);
  }
  ///const expenseItem=document.getElementById("expenseItem");
  
  const [filteredYear,setFilteredYear]=useState("2020");
    
    function onFilter(year) {
     
    
      setFilteredYear(year);
      console.log(filteredYear);
    }
    const filteredExpenses = expenseItem.filter(
      (expense) => expense.expenseDate.getFullYear().toString() === filteredYear
    );
  return (
    <>
      <h1>Let's Get started</h1>
      <ExpenseForm onSaveInForm={addExpenseHandler} />
      <div>
        <ExpenseFilter selected={filteredYear} onChoose={onFilter}/>
        {filteredExpenses.map((expenses, index) => (
        <Expense
          key={index}
          date={expenses.expenseDate}
          title={expenses.title}
          amount={expenses.expenseAmount}
          location={expenses.location}
        />
      ))}
      </div>
    </>
  );
}

export default App;
