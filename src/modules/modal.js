const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const modalContent = modal.querySelector(".popup-content");

  let count = 0;
  let idInvertal;
  const modalAnimation = () => {
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
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", modalAnimation);
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("resize", () => {
    const width = document.documentElement.clientWidth;

    if (width < 768) {
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          modal.style.display = "block";
        });
      });
    }
  });
};

export default modal;
