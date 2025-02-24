// Select DOM Elements
const barIcon = document.querySelector("#barIcon");
const list_group = document.querySelector("#list-group");
const navCloseBtn = document.querySelector("#closeBtn");
const arrowUpBtn = document.querySelector(".arrow-up .scroll-upbtn");

const project_list_Btns = document.querySelectorAll(".projects-list button");
const cards = document.querySelectorAll(".card");

// open nav event
barIcon.addEventListener("click", () => {
  barIcon.classList.add("hide");
  list_group.classList.add("active");
});

// close nav event
navCloseBtn.addEventListener("click", () => {
  list_group.classList.remove("active");
  barIcon.classList.remove("hide");
});

// When the user scrolls down 80px from the top of the document, show the button
window.addEventListener("scroll", scrollDown);

function scrollDown() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    arrowUpBtn.style.display = "block";
  } else {
    arrowUpBtn.style.display = "none";
  }
}

document.addEventListener("click", (e) => {
  if (e.target.id !== "barIcon" && e.target.id !== "list-group") {
    list_group.classList.remove("active");
    barIcon.classList.remove("hide");
  }
});

// Sticky Navigation Menu
const banner = document.querySelector(".banner");

window.addEventListener("scroll", stickyNavbar);

function stickyNavbar() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    banner.classList.add("sticky");
  } else {
    banner.classList.remove("sticky");
  }
}

for (let index = 0; index < project_list_Btns.length; index++) {
  const projects_list_btn = project_list_Btns[index];

  // projects_list_btn.classList.remove("active");
  projects_list_btn.addEventListener("click", btnIsActive);
}

// My Project
function btnIsActive(e) {
  const btnActive = document.querySelector(".btn.active");

  btnActive.classList.remove("active");
  e.target.classList.add("active");

  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];

    card.classList.add("hidden");

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hidden");
    }
  }
}

window.addEventListener("scroll", revealFun);

function revealFun() {
  const reveals = document.querySelectorAll(".reveal");

  for (let index = 0; index < reveals.length; index++) {
    const reveal = reveals[index];

    let windowHeight = window.innerHeight;
    let revealTop = reveal.getBoundingClientRect().top;

    let revealpoint = 80;

    if (revealTop < windowHeight - revealpoint) {
      reveal.classList.add("active");
    }
  }
}

let typed = new Typed("#auto-type", {
  strings: ["Front End Developer", "Next Js", "Day js"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
