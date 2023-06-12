const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер свяжется с вами!";

  const validate = (list) => {
    let success = true;

    const namePattern = /[а-яёА-ЯЁ\s]/i;
    const messagePattern = /[?!,.а-яёА-ЯЁ0-9\s]/i;
    const phonePattern = /\+\d{1}\(\d{3}\)\d{3}\-\d{2}\-\d{2}/g;

    list.forEach((input) => {
      if (input.name === "user_name") {
        console.log(input.value);
        if (!namePattern.test(input.value)) {
          success = false;
        }
      }
      if (input.phone === "user_phone") {
        if (!phonePattern.test(input.value)) {
          success = false;
        }
      }
      if (input.message === "user_message") {
        if (!messagePattern.test(input.value)) {
          success = false;
        }
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      console.log(element);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны!");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
