export let card = (title, description, imageUrl) => {
    console.log("Creando tarjeta con título:", title,description,imageUrl);
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h1 style="color: green;">${title}</h1><h2 style="color: white;">${description}</h2>`;
    // let h1 = document.createElement("h1");
    // h1.style.color = "green";
    // h1.textContent = title;
    let img = document.createElement("img");
    img.src = imageUrl;
    img.alt = title; 
    img.classList.add("card-image");
    card.appendChild(img);  
    return card; 
    {LISTO} 

}