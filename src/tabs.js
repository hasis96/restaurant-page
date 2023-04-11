function renderTabs() {

    const main = document.getElementById("content");
    const tabs = ["home", "menu", "contact"];


    let tabNav = document.createElement("div");
    tabNav.id = "tabNav";
    tabNav.classList.add("tabNav");
    main.appendChild(tabNav);

    for (let i = 0; i < tabs.length; i++) {
        let createDiv = document.createElement("div");
        createDiv.id = tabs[i];
        createDiv.classList.add(tabs[i]);
        createDiv.textContent = tabs[i];
        tabNav.appendChild(createDiv);
        }

    }

export { renderTabs }