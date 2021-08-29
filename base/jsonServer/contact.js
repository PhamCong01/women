var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var commentFaceApi = 'http://localhost:3000/comment'

function start() {

    getApi(getComment)
    handleCreateComment()
}

start()

function getApi(callback) {
        
    fetch(commentFaceApi)
        .then (function (response) {
            return response.json()
        })
        .then (callback)
    
}
function  createComment (data,callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(commentFaceApi,options) 
        .then(function (response) { 
            return response.json()
        })
        .then (callback)
}
function getComment(comment) {
    var liBlock = document.querySelector('#comments')
    
    var htmlS = comment.map(function (comments) {
        return `
                <li class="liElement">${comments.comment}
                    <button class="btn__element" onclick="edit(${comments.comment})">Chỉnh sửa</button>
                    <button class="btnElement" onclick="deleteComment(${comments.id})">Xóa</button>
               </li>
        `
    })
    var html = htmlS.join('')
    liBlock.innerHTML = html
}

function handleCreateComment() {
    var commentBtn = $('.comment__btn')
    commentBtn.onclick = function () {
        var commentInput = $('.comment__input').value
        console.log(commentInput)
        var form = {
            comment: commentInput
        }
       
        createComment(form,function (){
            getApi(getComment)
        })
    }
   
}
function edit (comment) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(commentFaceApi + '/' + comment,options) 
        .then(function (response) { 
            return response.json()
        })
        .then (function (){
            
        })
}

function deleteComment(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(commentFaceApi + '/' + id,options) 
        .then(function (response) { 
            return response.json()
        })
        .then (function (){
            getApi(getComment)
        })
}