var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var selectorAlls = $$('.covid__border-content')
var selectorH3 = $$('.covid__update-container-h3')
var selectorIcons = $$('.covid-icon')
var selectorParagraph = $$('.covid__update-container-paragah')

function checked () {

    for (let i = 0; i < selectorAlls.length; i++) {
        
        
        selectorH3[i].onclick = function() {
            
            selectorH3[i].classList.toggle('covid__update-container-h3--block')
            selectorIcons[i].classList.toggle('covid-icon--block')
            selectorParagraph[i].classList.toggle('covid__update-container-paragah--block')
        }
    }
}


