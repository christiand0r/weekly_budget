import { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const InsertBudget = ({
  setTotalBudget,
  setRemainingBudget,
  setShowQuestion,
}) => {
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState(false);

  //Leer presupuesto
  const defineBudget = e => setBudget(parseInt(e.target.value, 10));

  const handleSubmit = e => {
    e.preventDefault();

    if (budget < 0 || budget === 0 || isNaN(budget)) {
      setError(true);
      return;
    }

    setError(false);

    //Establecemos los presupuesto
    setTotalBudget(budget);
    setRemainingBudget(budget);

    //Ocultamos esta interfaz
    setShowQuestion(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error message='El presupuesto es incorrecto' /> : null}

      <form onSubmit={handleSubmit}>
        <input
          type='number'
          name='budget'
          id='budget'
          placeholder='Coloca tu presupuesto'
          className='u-full-width'
          onChange={defineBudget}
        />
        <input
          type='submit'
          value='Definir presupuesto'
          className='button-primary u-full-width'
        />
      </form>
    </>
  );
};

InsertBudget.propTypes = {
  setTotalBudget: PropTypes.func.isRequired,
  setRemainingBudget: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default InsertBudget;
