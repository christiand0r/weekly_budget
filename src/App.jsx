import { useState, useEffect } from 'react';
import BudgetControlForm from './components/BudgetControlForm';
import ControlBudget from './components/ControlBudget';
import InsertBudget from './components/InsertBudget';
import ListofExpenses from './components/ListofExpenses';

function App() {
  const [totalBudget, setTotalBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  //Eliminar Gasto
  const removeExpense = expense => {
    const expenseRemoved = expenses.filter(item => item.id !== expense.id);

    //Sumar al Presupuesto actual
    const remaining = remainingBudget + expense.expenseAmount;

    //Establecer el nuevo presupuesto
    setRemainingBudget(remaining);

    //Establecer los gastos sin el gasto eliminado
    setExpenses([...expenseRemoved]);
  };

  //Actualizar el restante del presupuesto
  useEffect(() => {
    if (createExpense) {
      //Agregar el nuevo presupuesto
      setExpenses([...expenses, expense]);

      //Restar al Presupuesto actual
      const remaining = remainingBudget - expense.expenseAmount;

      //Establecer el nuevo presupuesto restante
      setRemainingBudget(remaining);

      setCreateExpense(false);
    }
  }, [expense, createExpense]);

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
      </header>

      <div className='contenido-principal contenido'>
        {showQuestion ? (
          <InsertBudget
            setTotalBudget={setTotalBudget}
            setRemainingBudget={setRemainingBudget}
            setShowQuestion={setShowQuestion}
          />
        ) : (
          <div className='row'>
            <div className='one-half column'>
              <BudgetControlForm
                setExpense={setExpense}
                setCreateExpense={setCreateExpense}
              />
            </div>
            <div className='one-half column'>
              <ListofExpenses
                expenses={expenses}
                removeExpense={removeExpense}
              />
              <ControlBudget
                totalBudget={totalBudget}
                remainingBudget={remainingBudget}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
