let randomColor = function () {
  function randomValue() {
    return Math.round(Math.random() * 255).toString();
  }
  return (
    'rgb' +
    '(' +
    randomValue() +
    ',' +
    ' ' +
    randomValue() +
    ',' +
    ' ' +
    randomValue() +
    ')'
  );
};

export default randomColor;
