var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)


var moveRight = $('.damesly__content-right')
var moveBorder = $('.damesly__content-morocco')
var exitRight = $('.damesly__content-icon')
function moves () {
    moveRight.addEventListener('click',function () {
       
        moveBorder.classList.toggle('slide')
        
       
    })

    exitRight.addEventListener('click',function () {
        moveBorder.classList.toggle('exit__slide')
     
       
    })
}

moves()

