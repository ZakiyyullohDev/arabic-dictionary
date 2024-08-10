const uzbInput = document.getElementById('uzbInput')
const swiftBtn = document.getElementById('swiftBtn')
const uzLabel = document.getElementById('uzLabel')
const arLabel = document.getElementById('arLabel')
const translatedText = document.getElementById('translatedText')

swiftBtn.addEventListener('click', ()=> {
    if (uzLabel.textContent === 'Arab Tili') {
        arLabel.textContent = 'Arab Tili'
        uzLabel.textContent = "O'zbek Tili"
        swiftBtn.classList.add("animation-two")
        setTimeout(()=> {
            swiftBtn.classList.remove("animation-two")
        },1000)
        return ''
    }
    uzLabel.textContent = 'Arab Tili'
    arLabel.textContent = "O'zbek Tili"
    swiftBtn.classList.add("animation")
    setTimeout(()=> {
        swiftBtn.classList.remove("animation")
    },1000)
})
