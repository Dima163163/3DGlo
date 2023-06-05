const calculator = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calckType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  const step = 10;

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
    } else {
      totalValue = 0;
    }

    if (
      calckType.value &&
      calcSquare.value &&
      calcCount.value &&
      calcDay.value
    ) {
      total.textContent = outNum(totalValue);
    }
  };

  const outNum = (value) => {
    let n = 0;
    let interval = setInterval(() => {
      n = n + step;
      if (n == value) {
        clearInterval(interval);
      }
      total.textContent = n;
    }, 10);
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
