import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense";
import { useState } from "react";

const initial_expenses = [
 
];

function App() {
  
  const [expenses , setExpenses ] = useState(initial_expenses);
  
  const handleNewExpense = (expense) =>{

      setExpenses((prevExpenses) => {
        return [expense , ...prevExpenses];
        
      });
  };
  return (
    <div className="App">      
      <NewExpenses onAddExpense={handleNewExpense}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
