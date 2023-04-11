import { renderTabs } from "./tabs";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const main = document.getElementById("content");

function home() {
    renderTabs();
    renderHome();
}

home();

const tabNav = document.getElementById("tabNav");

tabNav.addEventListener("click", (e) => {
    let targetTab = e.target.textContent;
    console.log(targetTab);
    if (targetTab == "home") {
        main.removeChild(main.lastElementChild);
        renderHome();
        console.log("rendered:home")
    } if (targetTab == "menu") {
        main.removeChild(main.lastElementChild);
        renderMenu();
        console.log("rendered:menu")
    } if (targetTab == "contact") {
        main.removeChild(main.lastElementChild);
        renderContact();
        console.log("rendered:contact")
    }
}
);
