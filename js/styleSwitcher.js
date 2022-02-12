/** @format */

const links = document.querySelectorAll(".alernate-style"),
  totalLinks = links.length;

function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}

// bodyskin

const bodySkin = document.querySelectorAll(".body-skin"),
  totalBodySKin = bodySkin.length;
for (let i = 0; i < totalBodySKin; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value === "dark") {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }
  });
}

document
  .querySelector(".toggle-style-switcher")
  .addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
  });
