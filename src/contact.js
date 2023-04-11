
function renderContact() {
    const main = document.getElementById("content");
    const createDiv = document.createElement("div");
    const getCont = document.getElementById("contactCont");

    let contactCont = createDiv;
    contactCont.id = "contactCont";
    main.appendChild(contactCont);

    let lorem = createDiv;
    lorem.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    getCont.appendChild(lorem);

}

export { renderContact }