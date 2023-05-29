const formValidation = () => {
  const formNameSelectors = document.querySelectorAll(".form-name");
  const messageSelector = document.querySelector(".mess");
  const emailSelectors = document.querySelectorAll(".form-email");
  const phoneSelectors = document.querySelectorAll(".form-phone");

  const validtionMessage = function () {
    this.value = this.value.replace(/^[a-zA-Z\s-]+$/, "");
  };

  const validationEmail = function () {
    const email = this.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);
    if (!isValid) {
      this.setCustomValidity("Неправильный формат email");
    } else {
      this.setCustomValidity("");
    }

    this.reportValidity();
    console.log(this.checkValidity());
  };

  const validationPhone = function () {
    const phone = this.value;
    const phonePattern = /^\+\d{11}$/;
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

  emailSelectors.forEach((email) =>
    email.addEventListener("input", validationEmail)
  );

  phoneSelectors.forEach((phone) => {
    phone.addEventListener("input", validationPhone);
  });
};

export default formValidation;
