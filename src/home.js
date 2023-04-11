function renderHome() {
    const main = document.getElementById("content");
    const createDiv = document.createElement("div");

    const homePgCont = document.createElement("div");
    
    homePgCont.id = "homePgCont";
    homePgCont.classList.add("homePgCont");
    
    let title = createDiv;
    title.id = "title";
    title.classList.add("title");
    title.textContent = "Attack on Steak";

    main.appendChild(homePgCont);
    homePgCont.appendChild(title);
}

export{ renderHome }