const menuMobile = document.querySelector(".menu-mobile");
const mobileList = document.querySelector(".header .nav-bar .nav-list ul");
const mobileItems = [...document.querySelectorAll('.item')];

menuMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
  mobileList.classList.toggle("active");
});



const removeItems = () => {
    mobileItems.forEach((item) => {
        item.classList.remove('active-item');
    });
}

mobileItems.forEach((item) => {
    item.addEventListener('click', () => {
        removeItems();
        item.classList.add('active-item');
    });
});
