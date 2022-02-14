import PropTypes from 'prop-types';

const Error = ({ message = 'Ha ocurrido un error' }) => (
  <p className='alert alert-danger error'>{message}</p>
);

Error.propTypes = {
  message: PropTypes.string,
};
export default Error;
