const calculator = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calckType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  const time = 1000;
  const step = 100;

  const validateNumbers = function () {
    this.value = this.value.replace(/\D/g, "");
  };

  [calcSquare, calcCount, calcDay].forEach((input) => {
    input.addEventListener("input", validateNumbers);
  });

  const countCalc = () => {
    const calcTypeValue = +calckType.options[calckType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let cackDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      cackDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      cackDayValue = 1.5;
    }

    if (calckType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * cackDayValue;
      outTotal(totalValue);
    } else {
      totalValue = 0;
    }
  };

  const outTotal = (value) => {
    let totalPrice = 0;
    let timeValue = Math.round(time / (value / step));
    let interval = setInterval(() => {
      totalPrice = totalPrice + step;
      if (totalPrice == value) {
        clearInterval(interval);
      }
      total.textContent = totalPrice;
    }, timeValue);
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calckType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};
export default calculator;
