const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const anchors = menu.querySelectorAll('ul>li>a[href*="#"]');
  const serviceBlock = document.querySelector('a[href*="#"]');
  console.log(serviceBlock);

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", handleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
  serviceBlock.addEventListener("click", function (event) {
    event.preventDefault();
    const serviceId = serviceBlock.getAttribute("href");
    document.querySelector("" + serviceId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};

export default menu;
