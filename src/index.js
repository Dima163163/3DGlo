import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import formValidation from "./modules/formValidation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer("22 october 2021");
menu();
modal();
calculator(100);
// formValidation();
tabs();
slider();
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({ formId: "form2" });
sendForm({ formId: "form3" });
