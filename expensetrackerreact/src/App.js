import ExpenseForm from './Components/ExpenseForm';
import Expense from './Components/Expense';
function App() {
  let expenses = [
    {
      expenseDate: new Date(2020,2,10),
      title: "Groceries",
      expenseAmount: 50.0,
      location: "Deoria"
    },
    {
      expenseDate: new Date(2020,2,10),
      title: "Dinner",
      expenseAmount: 30.0,
      location: "gorakhpur"
    },
    {
      expenseDate: new Date(2020,2,10),
      title: "Gas",
      expenseAmount: 40.0,
      location: "delhi"
    },
    {
      expenseDate: new Date(2020,2,10),
      title: "Entertainment",
      expenseAmount: 20.0,
      location: "kanpur"
    },
  ];

  return (
    <>
    <h1>Let's Get started</h1>
    <ExpenseForm/>
    <Expense date={expenses[0].expenseDate} title={expenses[0].title} amount={expenses[0].expenseAmount} location={expenses[0].location}/>
    <Expense date={expenses[1].expenseDate} title={expenses[1].title} amount={expenses[1].expenseAmount} location={expenses[1].location}/>
    <Expense date={expenses[2].expenseDate} title={expenses[2].title} amount={expenses[2].expenseAmount} location={expenses[2].location}/>
    <Expense date={expenses[3].expenseDate} title={expenses[3].title} amount={expenses[3].expenseAmount} location={expenses[3].location}/>

    </>
  );
}

export default App;
