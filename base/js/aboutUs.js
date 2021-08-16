var $ = document.querySelector.bind(document)

var input = $(".subscribe-input")
var subscribes = $('.btn-subscribe')
var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function subscribe() {
    input.addEventListener("click", function(e) {
      
        input.onblur = function() {
            if(e.target.value == '') {
                input.classList.add('error')
            } else {
                input.classList.remove('error')
            }
            
        }
        input.onclick = function() {
            input.classList.remove('error')
        }

    })
}
function check() {
    input.addEventListener("click", function(event) {
        var values = event.target.value.trim()
           
            subscribes.onclick = function() {
                if(subscribes == '') {
                    alert("Mời bạn nhập email")
                }
                if(values.match(email)) {
                    alert('Bạn đã nhập email thành công ^^')
                } else {
                    alert('Email của bạn sai rồi ^^')
                }
            }
    })
}

function render() {
    this.subscribe()
    this.check()
}

render()