function renderMenu() {
    const main = document.getElementById("content");
    const createDiv = document.createElement("div");

    let menuPgCont = createDiv;
    menuPgCont.id = "menuPgCont";
    menuPgCont.classList.add("menuPgCont");
    main.appendChild(menuPgCont);

    const menuItems = [
        {
            title: "Mikasa",
            description: "Filet Mignon",
            price: "$49.99"
        },
        {
            title: "Erwin Dancho",
            description: "Commander's Steak",
            price: "$99.99"
        },
        {
            title: "Annie's Cut",
            description: "Crystalized Salt",
            price: "$49.99"
        },
        {
            title: "Eren Special",
            description: "Founding Steak: 2,000 Year Dry Aged",
            price: "$199.99"
        }
    ];

    function createElementsFromArray(objectsArray, targetDivId) {
        const targetDiv = document.getElementById(targetDivId);
        
        objectsArray.forEach(object => {
          const element = document.createElement("div");
          
          Object.keys(object).forEach(key => {
            const valueElement = document.createElement("span");
            valueElement.textContent = object[key];
            element.id = "itemCont";
            element.appendChild(valueElement);
          });
          
          targetDiv.appendChild(element);
        });
      }

    createElementsFromArray(menuItems, "menuPgCont");
}



export { renderMenu }