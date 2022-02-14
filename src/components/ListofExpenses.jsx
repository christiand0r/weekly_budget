import ExpenseCard from './ExpenseCard';
import PropTypes from 'prop-types';

const ListofExpenses = ({ expenses, removeExpense }) => (
  <div className='gastos-realizados'>
    {expenses.map(expense => (
      <ExpenseCard
        key={expense.id}
        expense={expense}
        removeExpense={removeExpense}
      />
    ))}
  </div>
);

ListofExpenses.propTypes = {
  expenses: PropTypes.array.isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default ListofExpenses;
