let btns = document.querySelectorAll('.btn')

for (btn of btns) {
    btn.addEventListener('click', function() {
        let card = this.closest('.card')
        let dots = card.querySelector('.dots')
        let more = card.querySelector('.more')

        if (dots.style.display === 'none') {
            dots.style.display = 'inline'
            more.style.display = 'none'
            this.textContent = 'More'
        } else {
            dots.style.display = 'none'
            more.style.display = 'inline'
            this.textContent = 'Close'
        }
    })
}