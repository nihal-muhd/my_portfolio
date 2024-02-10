const openMenu = false
const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const readMore = () => {
    const moreText = document.getElementsByClassName("more");
    const dots = document.getElementsByClassName('dots')
    console.log(dots);
    for (let i = 0; i < moreText.length; i++) {
        console.log(i, dots[i]);
        moreText[i].classList.toggle("open");
        dots[i].classList.toggle('close')
    }
}
