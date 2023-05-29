const formValidation = () => {
  const formNameSelectors = document.querySelectorAll(".form-name");
  const formNameTopSelector = document.querySelector(".top-form");
  const messageSelector = document.querySelector(".mess");
  const emailSelectors = document.querySelectorAll(".form-email");
  const phoneSelectors = document.querySelectorAll(".form-phone");

  // const validtionMessage = function () {
  //   this.value = this.value.replace(/^[a-zA-Z0-9]+$/, "");
  // };

  const validtionMessage = function () {
    const message = this.value;
    const messagePattern = /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i;
    const isValid = messagePattern.test(message);
    if (!isValid) {
      this.setCustomValidity("Неправильный формат вода.Только кириллица.");
    } else {
      this.setCustomValidity("");
    }
    this.reportValidity();
  };

  const validationEmail = function () {
    const email = this.value;
    const emailPattern = /[\-\.\w\_\.\!\~\*\']+@([\w]+\.)+[\w]+/gi;
    const isValid = emailPattern.test(email);
    if (!isValid) {
      this.setCustomValidity("Неправильный формат email");
    } else {
      this.setCustomValidity("");
    }

    this.reportValidity();
  };

  const validationPhone = function () {
    const phone = this.value;
    console.log(phone);
    const phonePattern = /\d{1}\(\d{3}\)\d{3}\-\d{2}\-\d{2}/g;
    const isValid = phonePattern.test(phone);
    console.log(isValid);
    if (!isValid) {
      this.setCustomValidity("Формат телефона в виде: X(XXX)XXX-XX-XX");
    } else {
      this.setCustomValidity("");
    }

    this.reportValidity();
  };

  messageSelector.addEventListener("input", validtionMessage);

  formNameSelectors.forEach((form) =>
    form.addEventListener("input", validtionMessage)
  );

  formNameTopSelector.addEventListener("input", validtionMessage);

  emailSelectors.forEach((email) =>
    email.addEventListener("input", validationEmail)
  );

  phoneSelectors.forEach((phone) => {
    phone.addEventListener("input", validationPhone);
  });
};

export default formValidation;
