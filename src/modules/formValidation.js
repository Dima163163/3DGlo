const formValidation = () => {
  const formNameSelectors = document.querySelectorAll(".form-name");
  const formNameTopSelector = document.querySelector(".top-form");
  const typeTextSelector = document.querySelectorAll("[type=text]");
  const messageSelector = document.querySelector(".mess");
  const emailSelectors = document.querySelectorAll(".form-email");
  const phoneSelectors = document.querySelectorAll(".form-phone");

  // const validtionMessage = function () {
  //   this.value = this.value.replace(/^[a-zA-Z0-9]+$/, "");
  // };

  // const validtionMessage = function () {
  //   let message = this.value;
  //   const messagePattern = /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i;
  //   const isValid = messagePattern.test(message);
  //   if (!isValid) {
  //     this.setCustomValidity("Неправильный формат вода.Только кириллица.");
  //   } else {
  //     this.setCustomValidity("");
  //   }
  //   this.reportValidity();
  // };

  const validtionName = function () {
    let message = this.value.trim();

    if (this.type === "text") {
      message = capitalizedWords(message);
    }
    message = message.replace(/[-\s]{2,}/g, " ");
    message = message.replace(/^-+|-$/g, "");
    message = message.replace(/^[a-zA-Z]+(?:[-]{1}[a-zA-Z]*)?$/i, "");
    this.value = message;
  };

  const validtionMessage = function () {
    let message = this.value.trim();
    if (this.className === "mess") {
      message = capitalizedWords(message);
    }
    message = message.replace(/[-\s]{2,}/g, " ");
    message = message.replace(/^-+|-$/g, "");
    message = message.replace(/^[a-zA-Z]+(?:[-]{1}[a-zA-Z]*)?$/i, "");
    this.value = message;
  };

  function capitalizedWords(text) {
    let words = text.split(" ");
    const capitalizedWords = words.map(function (word) {
      // Приводим первую букву к верхнему регистру, остальные буквы к нижнему
      const capitalized =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      return capitalized;
    });
    const result = capitalizedWords.join(" ");
    return result;
  }

  const validationEmail = function () {
    const email = this.value.trim();
    const emailPattern = /[\-\.\w\_\.\!\~\*\']+@([\w]+\.)+[\w]+/gi;
    const isValid = emailPattern.test(email);
  };

  const validationPhone = function () {
    let phone = this.value.trim();
    console.log(phone);
    const phonePattern =
      /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
    const result = phonePattern.replace(phonePattern);
    console.log(isValid);
    phone = phone.replace(/^-+|-$/g, "");
    console.log(phone);
    // phone = phone.replace(/[\d+]/g, (numb) => console.log(numb));
    // const phonePattern = /\d{1}\(\d{3}\)\d{3}\-\d{2}\-\d{2}/g;
    // const isValid = phonePattern.test(phone);
  };

  // const validationEmail = function () {
  //   const email = this.value.trim();
  //   const emailPattern = /[\-\.\w\_\.\!\~\*\']+@([\w]+\.)+[\w]+/gi;
  //   const isValid = emailPattern.test(email);
  //   if (!isValid) {
  //     this.setCustomValidity("Неправильный формат email");
  //   } else {
  //     this.setCustomValidity("");
  //   }

  //   this.reportValidity();
  // };

  // const validationPhone = function () {
  //   const phone = this.value.trim();
  //   console.log(phone);
  //   const phonePattern = /\d{1}\(\d{3}\)\d{3}\-\d{2}\-\d{2}/g;
  //   const isValid = phonePattern.test(phone);
  //   console.log(isValid);
  //   if (!isValid) {
  //     this.setCustomValidity("Формат телефона в виде: X(XXX)XXX-XX-XX");
  //   } else {
  //     this.setCustomValidity("");
  //   }
  //   this.reportValidity();
  // };

  // messageSelector.addEventListener("input", validtionMessage);

  // formNameSelectors.forEach((form) =>
  //   form.addEventListener("input", validtionMessage)
  // );

  // formNameTopSelector.addEventListener("input", validtionMessage);

  emailSelectors.forEach((email) =>
    email.addEventListener("input", validationEmail)
  );

  // phoneSelectors.forEach((phone) => {
  //   phone.addEventListener("input", validationPhone);
  // });

  messageSelector.addEventListener("blur", validtionMessage);

  formNameTopSelector.addEventListener("blur", validtionName);
  formNameSelectors.forEach((form) =>
    form.addEventListener("blur", validtionName)
  );

  phoneSelectors.forEach((phone) => {
    phone.addEventListener("blur", validationPhone);
  });
};

export default formValidation;
