import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const initialError = {
  status: false,
  msg: '',
};

const BudgetControlForm = ({ setExpense, setCreateExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [error, setError] = useState(initialError);

  //Agregar gasto
  const addExpense = e => {
    e.preventDefault();

    //Validar
    if (expenseName.trim() === '') {
      setError({
        status: true,
        msg: 'El campo "Nombre del Gasto" no puede ir vacío',
      });
      return;
    }

    if (expenseAmount < 1 || isNaN(expenseAmount)) {
      setError({
        status: true,
        msg: 'El campo "Cantidad" no es válido',
      });
      return;
    }

    setError(initialError);

    //Construir gasto
    const expenseObj = {
      expenseName,
      expenseAmount,
      id: shortid.generate(),
    };

    //Pasar al componente principal
    setExpense(expenseObj);

    //Permitir guardar en el componente principal
    setCreateExpense(true);

    //Resetear form
    setExpenseName('');
    setExpenseAmount(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Agrega tus gastos aquí</h2>

      {error.status ? <Error message={error.msg} /> : null}
      <div className='campo'>
        <label htmlFor='expense-name'>Nombre del Gasto</label>
        <input
          type='text'
          name='expense-name'
          id='expense-name'
          placeholder='Ejemplo: Transporte'
          className='u-full-width'
          onChange={e => setExpenseName(e.target.value)}
          value={expenseName}
        />
      </div>
      <div className='campo'>
        <label htmlFor='expense-number'>Cantidad</label>
        <input
          type='number'
          name='expense-number'
          id='expense-number'
          placeholder='Ejemplo: 10'
          className='u-full-width'
          onChange={e => setExpenseAmount(parseInt(e.target.value, 10))}
          value={expenseAmount}
        />
      </div>

      <input
        type='submit'
        value='Agregar gasto'
        className='button-primary u-full-width'
      />
    </form>
  );
};

BudgetControlForm.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};

export default BudgetControlForm;
