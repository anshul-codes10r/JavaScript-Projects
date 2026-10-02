const pull = document.getElementsByClassName("pull-wire");
const main = document.getElementsByClassName("main-container");
pull[0].addEventListener("click", () => {
    main[0].classList.toggle("lamp-on");
});