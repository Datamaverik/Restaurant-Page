import { loadHome } from "./homePg.mjs";
import { loadMenu } from "./menuPg.mjs";
import { loadAbout } from "./aboutPg.mjs";

const container = document.querySelector(".container");

//Creating header
const header = document.createElement("div");
header.classList.add("header");

//Adding title text
const title1 = document.createElement("h1");
title1.classList.add("title");
title1.id = "first";
title1.textContent = "The Goodwill";
const title2 = document.createElement("h1");
title2.classList.add("title");
title2.id = "second";
title2.textContent = "DINER";
const titleGroup = document.createElement("div");
titleGroup.classList.add("titleGroup");
titleGroup.appendChild(title1);
titleGroup.appendChild(title2);
header.appendChild(titleGroup);

//Adding navigation buttons
const btnGroup = document.createElement("div");
btnGroup.classList.add("btnGroup");

//Home button and functionality
const homeBtn = document.createElement("button");
homeBtn.classList.add("navBtn");
homeBtn.classList.add("selectedBtn");
homeBtn.textContent = "Home";

//Menu button and functionality
const menuBtn = document.createElement("button");
menuBtn.classList.add("navBtn");
menuBtn.textContent = "Menu";

//About button and functionality
const aboutBtn = document.createElement("button");
aboutBtn.classList.add("navBtn");
aboutBtn.textContent = "About";

btnGroup.appendChild(homeBtn);
btnGroup.appendChild(menuBtn);
btnGroup.appendChild(aboutBtn);
header.appendChild(btnGroup);

//Creating body
const body = document.createElement("div");
body.classList.add("mainBody");

//Creating the footer
const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "Copyright @ 2024 Datamaverik";
const githublink = document.createElement("a");
githublink.classList.add("gitLink");
githublink.href = "https://github.com/Datamaverik";
githublink.target = "blank";
footer.appendChild(githublink);

container.appendChild(header);
container.appendChild(body);
container.appendChild(footer);

window.onload = () => {
  loadHome(body);
  if (aboutBtn.classList.contains("selectedBtn"))
    aboutBtn.classList.remove("selectedBtn");
  if (menuBtn.classList.contains("selectedBtn"))
    menuBtn.classList.remove("selectedBtn");

  homeBtn.classList.add("selectedBtn");
};

homeBtn.addEventListener("click", () => {
  loadHome(body);
  if (aboutBtn.classList.contains("selectedBtn"))
    aboutBtn.classList.remove("selectedBtn");
  if (menuBtn.classList.contains("selectedBtn"))
    menuBtn.classList.remove("selectedBtn");

  homeBtn.classList.add("selectedBtn");
});

menuBtn.addEventListener("click", () => {
  loadMenu(body);
  if (aboutBtn.classList.contains("selectedBtn"))
    aboutBtn.classList.remove("selectedBtn");
  if (homeBtn.classList.contains("selectedBtn"))
    homeBtn.classList.remove("selectedBtn");

  menuBtn.classList.add("selectedBtn");
});

aboutBtn.addEventListener("click", () => {
  loadAbout(body);
  if (menuBtn.classList.contains("selectedBtn"))
    menuBtn.classList.remove("selectedBtn");
  if (homeBtn.classList.contains("selectedBtn"))
    homeBtn.classList.remove("selectedBtn");

  aboutBtn.classList.add("selectedBtn");
});