let img = document.querySelector("img"),
    dots = document.querySelectorAll(".dote"),
    size = document.querySelectorAll(".size span:not(:first-child)"),
    colors = document.querySelectorAll(".colors span:not(:first-child)");
dots.forEach((e, i) => {
    e.addEventListener("click", () => {
        document.querySelector(".dots span.active").classList.remove("active");
        e.classList.add("active");
        img.src = `imgs/image${i + 1}.png`;
    });
});
size.forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector(".size span.active").classList.remove("active");
        e.classList.add("active");
    });
});
colors.forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector(".colors span.active").classList.remove("active");
        e.classList.add("active");
    });
});

document.querySelector(".buy").onclick = () => {
    window.location.reload();
}