import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import formValidation from "./modules/formValidation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";

const sliderBlock = document.querySelector(".portfolio-content");
const slides = document.querySelectorAll(".portfolio-item");
const dotsList = document.querySelector(".portfolio-dots");

timer("22 october 2021");
menu();
modal();
calculator();
formValidation();
tabs();
slider(sliderBlock, slides, dotsList);
