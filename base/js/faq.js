var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)


var faqContent = $$('.faq__question')
var faqH2 = $$('.faq-title')
var faqIcon = $$('.faq__icon')
var faqPragah = $$('.faq__paragah')


function check() {

    for(let i = 0; i < faqContent.length;i++) {
        
        faqH2[i].onclick = function() { 
        
            faqH2[i].classList.toggle('faq__title-block')
            faqIcon[i].classList.toggle('faq__icon-block')
            faqPragah[i].classList.toggle('faq__block')
        }
    }
}


