(function () {
  const header = document.querySelector("header");
  const button = header.querySelector("button");
  const links = [
    ...header.querySelectorAll("a"),
    ...document.querySelectorAll('a[href^="#"]'),
  ];
  let _open = false;
  Object.defineProperty(this, "open", {
    get: function () {
      return _open;
    },
    set: function (value) {
      _open = value;
      if (_open) {
        header.setAttribute("data-open", true);
        button.setAttribute("aria-expanded", true);
      } else {
        header.removeAttribute("data-open");
        button.setAttribute("aria-expanded", false);
      }
    },
  });
  window.addEventListener("scroll", function (event) {
    open = false;
    if (window.scrollY > 0) {
      header.setAttribute("data-scrolled", true);
    } else {
      header.removeAttribute("data-scrolled");
    }
  });
  button.addEventListener("click", function (event) {
    open = !open;
  });
  links.forEach(function (link) {
    const element = document.querySelector(link.getAttribute("href"));
    link.addEventListener("click", function (event) {
      event.preventDefault();
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
})();
