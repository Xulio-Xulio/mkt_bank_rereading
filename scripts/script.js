const elements = document.querySelectorAll(`[data-anima]`)
const animacaoClass = `animacao`

function animaScroll() {
    /* Tamanho da janela a ser usado */
    const pageTop = window.pageYOffset+((window.innerHeight*3)/4)
    /* Percorre os elementos [data-anima] */
    elements.forEach(function(element){
       /* Adiciona ou remove animação baseado no pageTop */
        if(pageTop > element.offsetTop){
            element.classList.add(animacaoClass)
        }else{
            element.classList.remove(animacaoClass)
        }
    })
}

if(elements.length) {
    window.addEventListener(`scroll`, function(){
        animaScroll()
    })
} 