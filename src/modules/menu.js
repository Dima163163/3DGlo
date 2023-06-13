const menu = () => {
  const blockMain = document.querySelector("main");
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const menuItemsLinks = menu.querySelectorAll('ul>li>a[href*="#"]');

  const handleMenu = () => {
    console.log('sdfdsfsd')
    menu.classList.toggle("active-menu");
  };

  const smoothScroll = (target, duration) => {
    //текущая позиция в пикселях
    let currentY = window.pageYOffset;

    //отслеживает позицию Y в пикселях
    target = document.getElementById(target);

    let targetYPos = target.offsetTop;

    //оставшееся расстояние до цели в пикселях
    let distance = targetYPos - currentY;

    let start = null;

    const animation = (timestamp) => {
      if (!start) start = timestamp;

      let timeElapsed = timestamp - start;

      let run = ease(timeElapsed, currentY, distance, duration);

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
    smoothScroll(scrollTarget, 1000);
  };

  blockMain.addEventListener("click", (e) => {
    if (menu.classList.contains("active-menu")) {
      if (!e.target.closest(".active-menu")) {
        handleMenu();
      }
    }

    if (e.target.closest(".menu")) {
      handleMenu();
    }
    const serveceBtn = e.target.closest("a");
    if (serveceBtn) {
      serveceBtn.addEventListener("click", scrollAnimation);
    }
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn")) {
      menu.classList.toggle("active-menu");
    }
    if (e.target.closest("a")) {
      menuItemsLinks.forEach((item) => {
        item.addEventListener("click", (e) => {
          scrollAnimation(e);
        });
      });
      handleMenu();
    }
  });

  // document.addEventListener("click", (e) => {
  //   const serveceBtn = e.target.closest('a[href="#service-block"]');
  //   if (serveceBtn) {
  //     serveceBtn.addEventListener("click", scrollAnimation);
  //   }

  //   if (menu.classList.contains("active-menu")) {
  //     if (!e.target.closest(".active-menu")) {
  //       handleMenu();
  //     }
  //   }

  //   if (e.target.closest(".menu")) {
  //     handleMenu();
  //   }

  //   if (e.target.classList.contains("close-btn")) {
  //     menu.classList.toggle("active-menu");
  //   }
  //   if (e.target.closest("a")) {
  //     menuItemsLinks.forEach((item) => {
  //       item.addEventListener("click", scrollAnimation);
  //     });
  //   }
  // });
};

export default menu;
