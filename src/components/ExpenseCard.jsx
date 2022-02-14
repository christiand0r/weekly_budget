import PropTypes from 'prop-types';

const ExpenseCard = ({ expense, removeExpense }) => {
  const { expenseName, expenseAmount } = expense;

  return (
    <li className='gastos'>
      <p>
        {expenseName}
        <span className='gasto'>$ {expenseAmount}</span>
      </p>
      <button onClick={() => removeExpense(expense)}>Eliminar</button>
    </li>
  );
};

ExpenseCard.propTypes = {
  expense: PropTypes.object.isRequired,
  removeExpense: PropTypes.func.isRequired,
};
export default ExpenseCard;
