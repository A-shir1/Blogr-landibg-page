var respDropdownItems = document.querySelectorAll(".respDropdown-items");
var angleArrow = document.querySelectorAll("i");
document.querySelectorAll(".respNav-item").forEach(element => {
    element.addEventListener("click", function(){
        for (var i = 0; i < respDropdownItems.length; i++)
            respDropdownItems[i].classList.toggle("respInvisible");
            angleArrow[i].classList.remove("fa-angle-down");
            
    });
});

document.querySelector("#bars").addEventListener("click", function(){
    document.querySelector("#respDropdownWrap").classList.toggle("navInvisible");
});
