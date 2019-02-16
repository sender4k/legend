(function () {
    const menu = document.getElementById('menu')
    const openMenu = document.getElementById('openMenu')

    menu.addEventListener('click', function () {
        openMenu.classList.toggle('active')
        // openMenu.classList.toggle('height')
    })
})()