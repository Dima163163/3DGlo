const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const anchors = menu.querySelectorAll('ul>li>a[href*="#"]');
  const serviceBlock = document.querySelector('a[href*="#"]');

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  const scrollIntoView = function (event) {
    event.preventDefault();
    const blockID = event.currentTarget.getAttribute("href");
    const blockElem = document.querySelector("" + blockID);
    console.log(blockElem);
    blockElem.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", handleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", scrollIntoView);
  });
  serviceBlock.addEventListener("click", scrollIntoView);
};

export default menu;
