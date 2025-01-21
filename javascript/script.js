const menu=document.querySelector(".bars");
const navigation=document.querySelector("header ul");
const remove=document.querySelector(".fa-x");
menu.addEventListener("click", ()=>{
    navigation.classList.add("navigationHover");
    menu.style.display='none';
    remove.style.opacity='1'
    remove.classList.add("remove2")

});
remove.addEventListener("click", ()=>{
    navigation.classList.remove("navigationHover");   
    menu.style.display='';
     remove.style.opacity='0'
     remove.classList.remove("remove2");
}
)

window.addEventListener("scroll", ()=>{
    navigation.classList.remove("navigationHover");   
    menu.style.display='';
     remove.style.opacity='0'
     remove.classList.remove("remove2");
});


const burger2=document.querySelector(".menuBurger2 ");
const navigation2=document.querySelector(".navigationServicesClick ");

burger2.addEventListener("click", ()=>{
    navigation2.classList.toggle("navigationServices");
})

window.addEventListener("scroll", ()=>{
    navigation2.classList.add("navigationServicesClick"); 
    navigation2.classList.remove("navigationServices")
})

const sr=ScrollReveal({
    direction:'vertical',
    duration:1500,
    origin:'top',
    distance:'30px'
})

sr.reveal(".copy, .footerContainer, .childPablo, .pablo, .container-blog, .navigationServicesClick, .heroSection, .text", {interval:200})