const menu=document.querySelector(".bars");
const navigation=document.querySelector("header ul");

menu.addEventListener("click", ()=>{
    navigation.classList.toggle("navigationHover");
});