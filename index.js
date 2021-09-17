const hamburger_btn = document.getElementById("hamburger");
const nav_ul = document.getElementById("nav-ul");
const container = document.body;
hamburger_btn.addEventListener('click', () => {
    container.classList.add("overlay");
})

const creations = [`DEEP EARTH`, "NIGHT\nARCADE", "SOCCER TEAM VR", "THE GRID", "FROM UP ABOVE VR", "POCKET BOREALIS", "THE CURIOSITY", "MAKE IT FISHEYE"]
const imgs = ["image-curiosity.jpg","image-deep-earth.jpg","image-fisheye.jpg","image-from-above.jpg","image-grid.jpg","image-soccer-team.jpg","image-night-arcade.jpg","image-pocket-borealis.jpg"]
const cards = document.getElementById("cards");

for(var i = 0 ; i < creations.length;i++){
    const img_container = document.createElement("div");
    const child = document.createElement("img");
    const caption = document.createElement("p");
    caption.textContent = creations[i];
    const img = imgs[i];
    child.setAttribute("src",`./images/mobile/${img}`)
    img_container.append(child,caption);
    // img_container.appendChild(caption);
    cards.appendChild(img_container);
}

