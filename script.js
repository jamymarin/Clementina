const navChange = () => {
    if (window.scrollY > 100) {
        document.querySelector("nav").classList.add("fondoNav");
    } else {
        document.querySelector("nav").classList.remove("fondoNav");
    }
};

window.addEventListener("scroll", navChange);
