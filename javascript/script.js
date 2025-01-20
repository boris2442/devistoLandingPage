const menu=document.querySelector(".bars");
const navigation=document.querySelector("header ul");
const remove=document.querySelector(".fa-x")
menu.addEventListener("click", ()=>{
    navigation.classList.add("navigationHover");
    menu.style.display='none';
    remove.style.opacity='1'

});
remove.addEventListener("click", ()=>{
    navigation.classList.remove("navigationHover");   
    menu.style.display='';
     remove.style.opacity='0'
}
)