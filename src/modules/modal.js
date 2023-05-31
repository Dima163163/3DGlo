const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  const modalContent = modal.querySelector(".popup-content");

  const width = document.documentElement.clientWidth;

  let count = 0;
  let idInvertal;

  const modalAnimation = () => {
    if (width > 768) {
      count++;

      idInvertal = requestAnimationFrame(modalAnimation);

      if (count <= 50) {
        modal.style.display = "block";
        modalContent.style.transform = `translateX(-${count}px)`;
      } else {
        cancelAnimationFrame(idInvertal);
        modalContent.style = "";
        count = 0;
      }
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
