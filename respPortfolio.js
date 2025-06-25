function getel(id) {
    return document.getElementById(id);
}
const projectRoutes = {
    "card1": "spriteGrid_Proj.html",
    "card2": "respSite_Proj.html",
    "card3": "booska_Proj.html",
    "card4": "blink_Proj.html"
};

Object.entries(projectRoutes).forEach(([cardId, url]) => {
    const currCard = document.getElementById(cardId);
    if (currCard) {
        currCard.addEventListener("click", () => {
            window.location.replace(url);
        });
    }
});

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalBG = document.querySelector(".modal-bg");

document.querySelectorAll(".image-gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.style.display = "flex";
    });
});
if (modalBG)
    modalBG.addEventListener("click", () => {
        modal.style.display = "none";
    });

if (modalImg)
    modalImg.addEventListener("click", () => {
        modal.style.display = "none";
    });
