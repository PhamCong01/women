var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var header = $('.header__bars')
var iconBars = $('.icon__bars')
var navBars = $('.header__bars-content ul')
var overPlay = $('.over__play')

// image travel start
var imageTravels = $('.image__travel')
var imageTravel = $$('.image__travels')
var imageLeft = $('.icon__travel-left')
var imageRight = $('.icon__travel-right')
var imageLength = imageTravel.length
var count = 0
// image travel end
// navbar open and close start
iconBars.onclick = function() {
    iconBars.classList.toggle('active')
    navBars.classList.toggle('active')
}
// navbar open and close end

// video start 


// logo image start
window.addEventListener('scroll', reveal)
function reveal() {
    var reveals = $$('.image__friend')

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top
        var revealPoint =150;
        
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('activity')
        } else {
            reveals[i].classList.remove('activity')
        }
    }
}
// logo image end

// background image start
window.addEventListener('scroll', active)
function active() {
    var actives = $$('.background__image')

    for (var i = 0; i < actives.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTops = actives[i].getBoundingClientRect().top
        var revealPoints =150;
        
        if(revealTops < windowHeight - revealPoints) {
            actives[i].classList.add('activity')
        } else {
            actives[i].classList.remove('activity')
        }
    }
}
// background image end

// right and left all image start

// image right start
imageRight.addEventListener('click', nextImage)

function nextImage() {
    imageTravel.forEach(function(event) {
        imageTravel[count].classList.remove('move')
    })
    count++;
    if(count > (imageLength - 1)) {
        count = 0
    }
    imageTravel[count].classList.add('move')
}
// image right end

// image left start
imageLeft.addEventListener('click', function () {
    imageTravel.forEach(function(event) {
        imageTravel[count].classList.remove('move')
    })
    count--;
    if(count < 0) {
        count = imageLength -1
    }
    imageTravel[count].classList.add('move')
})
// image left END

// image auto play

var autoPlayImage;

function autoPlay() {
    autoPlayImage = setInterval(function () {
        // callback nextImage
        nextImage()
    },3000)
}
autoPlay()

// stop image auto play
imageTravels.addEventListener('mouseover', () => {
    clearInterval(autoPlayImage)
})

// start image
imageTravels.addEventListener('mouseout', () => {
    autoPlay()
})

// truot vao tu ben trai


