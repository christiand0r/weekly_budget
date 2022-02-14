export const checkBudget = (budget, remaining) => {
  let _class;

  if (budget / 4 > remaining) {
    _class = 'alert alert-danger';
    return _class;
  }

  if (budget / 2 > remaining) {
    _class = 'alert alert-warning';
    return _class;
  }

  _class = 'alert alert-success';

  return _class;
};
