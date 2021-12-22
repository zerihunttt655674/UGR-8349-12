function menuHandler(){
    var menu = document.getElementById("menubar")

    if (menu.className === "navigation__list"){
        menu.className += " dropdown";
        console.log(menu.className)
    }
    else{
        menu.className = "navigation__list";
        console.log(menu.className)
    }
}