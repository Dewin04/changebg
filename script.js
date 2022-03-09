const colorOne = document.getElementById("colorOne");
const colorTwo = document.getElementById("colorTwo");

colorOne.addEventListener("change", () =>{
    document.body.style.backgroundColor = colorOne.value;
})
colorTwo.addEventListener ("change", () => {
    document.body.style.color= colorTwo.value;
})