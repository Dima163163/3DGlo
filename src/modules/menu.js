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

  // const scrollIntoView = function (event) {
  //   event.preventDefault();
  //   const blockID = event.currentTarget.getAttribute("href");
  //   const blockElem = document.querySelector("" + blockID);
  //   console.log(blockElem);
  //   blockElem.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  const smoothScroll = (target, duration) => {
    console.log("target1", target);
    console.log("duration", duration);
    //текущая позиция в пикселях
    let currentY = window.pageYOffset;
    console.log("currentY", currentY);
    //отслеживает позицию Y в пикселях
    target = document.getElementById(target);
    console.log("target2", target);

    let targetYPos = target.offsetTop;
    console.log("targetYPos", targetYPos);
    //оставшееся расстояние до цели в пикселях
    let distance = targetYPos - currentY;
    console.log("distance", distance);
    //отслеживание времни
    let start = null;

    const animation = (timestamp) => {
      console.log("timestamp", timestamp);
      console.log("start1", start);

      if (!start) start = timestamp;

      console.log("timestamp", timestamp);
      console.log("start2", start);

      let timeElapsed = timestamp - start;

      let run = ease(timeElapsed, currentY, distance, duration);
      console.log(run);
      console.log("timeElapsed", timeElapsed);
      console.log("currentY", currentY);
      console.log("distance", distance);
      console.log("duration", duration);

      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        cancelAnimationFrame(animationID);
      }
    };

    let animationID = requestAnimationFrame(animation);
  };

  let ease = (timeElapsed, currentY, distance, duration) => {
    timeElapsed /= duration / 2;
    if (timeElapsed < 1) {
      return (
        (distance / 2) * timeElapsed * timeElapsed * timeElapsed + currentY
      );
    }
    timeElapsed -= 2;
    return (
      (distance / 2) * (timeElapsed * timeElapsed * timeElapsed + 2) + currentY
    );
  };

  const scrollAnimation = function (event) {
    event.preventDefault();
    let scrollTarget = event.currentTarget.getAttribute("href").slice(1);
    console.log("scrollTarget", scrollTarget);
    smoothScroll(scrollTarget, 1000);
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", handleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", scrollAnimation)
  );

  serviceBlock.addEventListener("click", scrollAnimation);

  // anchors.forEach((anchor) => {
  //   anchor.addEventListener("click", scrollIntoView);
  // });
  // serviceBlock.addEventListener("click", scrollIntoView);
};

export default menu;
