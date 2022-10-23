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
    if(theme === "dark") {
        changeThemeToLight()
    } else {
        changeThemeToDark()
    }
})

let theme = localStorage.getItem('data-theme')
if(theme === "dark") {
    changeThemeToDark()
} else {
    changeThemeToLight()
}
