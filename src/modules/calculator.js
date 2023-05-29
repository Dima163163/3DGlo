const calculator = () => {
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");

  const validateNumbers = function () {
    this.value = this.value.replace(/\D/g, "");
  };

  [calcSquare, calcCount, calcDay].forEach((input) => {
    input.addEventListener("input", validateNumbers);
  });
};
export default calculator;
