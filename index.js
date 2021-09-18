const hamburger_btn = document.getElementById("hamburger");
const nav_ul = document.getElementById("nav-ul");
const overlay = document.getElementById("overlay");
const close_btn = document.getElementById("close-btn");
const container = document.getElementById("container");
hamburger_btn.addEventListener('click', () => {
    container.style.display = "none";

})

close_btn.addEventListener("click",()=>{
    container.style.display = "block";
})

const creations = [`DEEP EARTH`, "NIGHT\nARCADE", "SOCCER TEAM VR", "THE GRID", "FROM UP ABOVE VR", "POCKET BOREALIS", "THE CURIOSITY", "MAKE IT FISHEYE"]
const imgs = ["image-curiosity.jpg","image-deep-earth.jpg","image-fisheye.jpg","image-from-above.jpg","image-grid.jpg","image-soccer-team.jpg","image-night-arcade.jpg","image-pocket-borealis.jpg"]
const cards = document.getElementById("cards");


//Set cards
for(var i = 0 ; i < creations.length;i++){
    const img_container = document.createElement("div");
    const child = document.createElement("img");
    const caption = document.createElement("p");
    caption.textContent = creations[i];
    const img = imgs[i];
    child.setAttribute("src",`./images/mobile/${img}`)
    img_container.append(child,caption);
    cards.appendChild(img_container);
}

//Set icons

const icons = ["icon-facebook.svg","icon-twitter.svg","icon-pinterest.svg","icon-instagram.svg"]
const logo_container = document.getElementById("logos");
for (var i = 0 ; i<icons.length; i++){
    const icon = document.createElement("img");
    icon.setAttribute("src",`./images/${icons[i]}`);
    logo_container.appendChild(icon)
    console.log(icon)

}