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
      this.setCustomValidity("Неправильный формат имени");
    } else {
      this.setCustomValidity("");
    }
    this.reportValidity();
  };

  const validationEmail = function () {
    const email = this.value;
    const emailPattern = /[\-\.\w]+@([\w]+\.)+[\w]+/gi;
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
    const phonePattern = /\+\d{11}$/;
    const isValid = phonePattern.test(phone);
    if (!isValid) {
      this.setCustomValidity("Неправильный формат телефона");
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
