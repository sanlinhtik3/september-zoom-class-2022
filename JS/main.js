const darkMode = document.querySelector("#dark-mode")
const isDark = false;


const changeThemeToDark = () => {
    localStorage.setItem('data-theme', 'dark')
    document.documentElement.classList.add('dark')
    darkMode.setAttribute('checked', "checked")
}

const changeThemeToLight = () => {
    localStorage.setItem('data-theme', 'light')
    document.documentElement.classList.remove('dark')
    darkMode.removeAttribute('checked')
}

darkMode.addEventListener('click', () => {
    let theme = localStorage.getItem('data-theme')
    console.log(theme)
    if (theme === "dark") {
        changeThemeToLight()
    } else {
        changeThemeToDark()
    }
})

let theme = localStorage.getItem('data-theme')
if (theme === "dark") {
    changeThemeToDark()
} else {
    changeThemeToLight()
}


// Animate Navbar
const AnimateNav = document.querySelector(".animate-nav");
var waypoint = new Waypoint({
    element: document.getElementById("services"),
    handler: function (direction) {
        if(direction === 'down') {
          AnimateNav.classList.add(
            "position-fixed",
            "bg-white",
            "shadow-lg",
            "w-100",
            "animate__fadeInDown"
          );
        } else {
            AnimateNav.classList.remove(
              "position-fixed",
              "bg-white",
              "shadow-lg",
              "w-100",
              "animate__fadeInDown"
            );
        }
    },
    offset: "5%",
});



// Scroll Reveal
ScrollReveal().reveal(".aa", {
  origin: "bottom",
  distance: "30px",
  interval: 300,
});