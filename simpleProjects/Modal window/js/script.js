let btns = document.querySelectorAll("*[dataModalBtn]")

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let name = btns[i].getAttribute('dataModalBtn')
        let modal = document.querySelector("[dataModalWindow='"+ name +"']")
        modal.style.display = "block"

        let close = modal.querySelector(".closeModalWindow")
        close.addEventListener('click', function() {
            modal.style.display = "none"
        })
    })
}

window.onclick = function(e) {
    if (e.target.hasAttribute('dataModalWindow')) {
        let modals = document.querySelectorAll("*[dataModalWindow]")
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = "none"
        }
    }
}