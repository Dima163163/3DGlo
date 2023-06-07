import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  const modalContent = modal.querySelector(".popup-content");

  const width = document.documentElement.clientWidth;

  const modalAnimation = () => {
    if (width > 768) {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.display = "block";
          modalContent.style = `transform: translateX(-${progress * 50}px)`;
        },
      });
    } else {
      modal.style.display = "block";
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", modalAnimation);
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};

export default modal;
