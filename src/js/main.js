(function () {
    const menu = document.getElementById('menu')
    const openMenu = document.getElementById('openMenu')

    menu.addEventListener('click', function () {
        openMenu.classList.toggle('active')
        // openMenu.classList.toggle('height')
        // openMenu.style.top = '100%'
    })
})();
(function () {
    const form = document.getElementById('form')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const text = document.getElementById('text')
    const btn = document.getElementById('sub')
    const accord = document.getElementById('accordion')
    const out = document.getElementById('out')
    const afirm = document.getElementById('afirm')
    const str = ''

    btn.addEventListener('click', function () {
        out.innerHTML = 'Name: ' + str + name.value + '<br>'+ 'Email: ' + str + email.value + '<br>'+ 'Text: ' + str + text.value
        form.reset();
        afirm.style.display = 'block'
    })
    accord.addEventListener('click', function () {
        if(out.style.display == 'block'){
            accord.innerHTML = 'Open'
            out.style.display = 'none'
        } else {
            accord.innerHTML = 'Close'
            out.style.display = 'block'
        }

    })
})()