const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    console.log("test");
    document.body.classList.toggle( "show-mobile-menu",true);

})

