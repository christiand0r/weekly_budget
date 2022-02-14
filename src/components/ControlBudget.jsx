import PropTypes from 'prop-types';
import { checkBudget } from '../helpers/CheckBudget';

const ControlBudget = ({ totalBudget, remainingBudget }) => {
  return (
    <>
      <div className='alert alert-primary'>Presupuesto: ${totalBudget}</div>
      <div className={checkBudget(totalBudget, remainingBudget)}>
        Restante: ${remainingBudget}
      </div>
    </>
  );
};

ControlBudget.propTypes = {
  totalBudget: PropTypes.number.isRequired,
  remainingBudget: PropTypes.number.isRequired,
};

export default ControlBudget;
