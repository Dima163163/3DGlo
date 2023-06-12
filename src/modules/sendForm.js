const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  // const loadText = "Загрузка...";
  const loadAnimation = `
	<div class="loadingio-spinner-spinner-m4xibvllzcq">
		<div class="ldio-8xzujic9q5p">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
	`;
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер свяжется с вами!";

  const validate = (list) => {
    let success = true;

    const namePattern = /[а-яёА-ЯЁ\s]/i;
    const messagePattern = /[?!,.а-яёА-ЯЁ0-9\s]/i;
    const phonePattern = /\+\d{1}\(\d{3}\)\d{3}\-\d{2}\-\d{2}/g;

    list.forEach((input) => {
      if (input.name === "user_name") {
        if (!namePattern.test(input.value)) {
          success = false;
        }
      }
      if (input.name === "user_phone") {
        if (!phonePattern.test(input.value)) {
          success = false;
        }
      }
      if (input.name === "user_message") {
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

    if (validate(formElements)) {
      statusBlock.innerHTML = loadAnimation;
      form.append(statusBlock);
    }

    // statusBlock.textContent = loadText;

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
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
      alert(
        `Данные не валидны!
Имя в формате: Иван
Телефон в формате: X(XXX)XXX-XX-XX`
      );
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
