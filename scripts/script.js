const elements = document.querySelectorAll(`[data-anima]`)
const animacaoClass = `animacao`

function animaScroll() {
    const pageTop = window.pageYOffset+((window.innerHeight*3)/4)
    elements.forEach(function(element){
        if(pageTop > element.offsetTop){
            element.classList.add(animacaoClass)
        }
    })
}

if(elements.length) {
    window.addEventListener(`scroll`, function(){
        animaScroll()
    })
} 

  