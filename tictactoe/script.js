var boxone = document.querySelector('.box1')
var boxtwo = document.querySelector('.box2')
var boxthree = document.querySelector('.box3')
var boxfour = document.querySelector('.box4')
var boxfive = document.querySelector('.box5')
var boxsix = document.querySelector('.box6')
var boxseven = document.querySelector('.box7')
var boxeight = document.querySelector('.box8')
var boxnine = document.querySelector('.box9')
var header = document.querySelector('h1')

boxone.addEventListener('click',function(){
    boxone.style.color = 'blue'
    boxone.innerHTML = "<strong>X</strong>";
})

boxone.addEventListener('dblclick',function(){
    boxone.style.color = 'orange'
    boxone.innerHTML = "<strong>O</strong>"
})

boxtwo.addEventListener('click',function(){
    boxtwo.style.color = 'blue'
    boxtwo.innerHTML = "<strong>X</strong>"
})

boxtwo.addEventListener('dblclick',function(){
    boxtwo.style.color = 'orange'
    boxtwo.innerHTML = "<strong>O</strong>"
})

boxthree.addEventListener('click',function(){
    boxthree.style.color = 'blue'
    boxthree.innerHTML = "<strong>X</strong>"
})

boxthree.addEventListener('dblclick',function(){
    boxthree.style.color = 'orange'
    boxthree.innerHTML = "<strong>O</strong>"
})

boxfour.addEventListener('click',function(){
    boxfour.style.color = 'blue'
    boxfour.innerHTML = "<strong>X</strong>"
})

boxfour.addEventListener('dblclick',function(){
    boxfour.style.color = 'orange'
    boxfour.innerHTML = "<strong>O</strong>"
})

boxfive.addEventListener('click',function(){
    boxfive.style.color = 'blue'
    boxfive.innerHTML = "<strong>X</strong>"
})

boxfive.addEventListener('dblclick',function(){
    boxfive.style.color = 'orange'
    boxfive.innerHTML = "<strong>O</strong>"
})

boxsix.addEventListener('click',function(){
    boxsix.style.color = 'blue'
    boxsix.innerHTML = "<strong>X</strong>"
})

boxsix.addEventListener('dblclick',function(){
    boxsix.style.color = 'orange'
    boxsix.innerHTML = "<strong>O</strong>"
})

boxseven.addEventListener('click',function(){
    boxseven.style.color = 'blue'
    boxseven.innerHTML = "<strong>X</strong>"
})

boxseven.addEventListener('dblclick',function(){
    boxseven.style.color = 'orange'
    boxseven.innerHTML = "<strong>O</strong>"
})

boxeight.addEventListener('click',function(){
    boxeight.style.color = 'blue'
    boxeight.innerHTML = "<strong>X</strong>"
})

boxeight.addEventListener('dblclick',function(){
    boxeight.style.color = 'orange'
    boxeight.innerHTML = "<strong>O</strong>"
})

boxnine.addEventListener('click',function(){
    boxnine.style.color = 'blue'
    boxnine.innerHTML = "<strong>X</strong>"
})

boxnine.addEventListener('dblclick',function(){
    boxnine.style.color = 'orange'
    boxnine.innerHTML = "<strong>O</strong>"
})

document.addEventListener('click',function(){
    setTimeout(function() {
        if (boxone.textContent==='X' && boxtwo.textContent==='X' && boxthree.textContent==='X'){
            alert('Player X wins!')
        } else if (boxone.textContent==='X' && boxfive.textContent==='X' && boxnine.textContent==='X'){
            alert('Player X wins!')
        } else if (boxone.textContent==='X' && boxfour.textContent==='X' && boxtseven.textContent==='X'){
            alert('Player X wins!')
        } else if (boxtwo.textContent==='X' && boxfive.textContent==='X' && boxeight.textContent==='X'){
            alert('Player X wins!')
        } else if (boxthree.textContent==='X' && boxsix.textContent==='X' && boxnine.textContent==='X'){
            alert('Player X wins!')
        } else if (boxone.textContent==='X' && boxfour.textContent==='X' && boxseven.textContent==='X'){
            alert('Player X wins!')
        } else if (boxfour.textContent==='X' && boxfive.textContent==='X' && boxsix.textContent==='X'){
            alert('Player X wins!')
        } else if (boxseven.textContent==='X' && boxeight.textContent==='X' && boxnine.textContent==='X'){
            alert('Player X wins!')
        } else if (boxthree.textContent==='X' && boxfive.textContent==='X' && boxseven.textContent==='X'){
            alert('Player X wins!')
        }}, 1500);
})

document.addEventListener('dblclick',function(){
    setTimeout(function() {
        if (boxone.textContent==='O' && boxtwo.textContent==='O' && boxthree.textContent==='O'){
            alert('Player O wins!')
        } else if (boxone.textContent==='O' && boxfive.textContent==='O' && boxnine.textContent==='O'){
            alert('Player O wins!')
        } else if (boxone.textContent==='O' && boxfour.textContent==='O' && boxtseven.textContent==='O'){
            alert('Player O wins!')
        } else if (boxtwo.textContent==='O' && boxfive.textContent==='O' && boxeight.textContent==='O'){
            alert('Player O wins!')
        } else if (boxthree.textContent==='O' && boxsix.textContent==='O' && boxnine.textContent==='O'){
            alert('Player O wins!')
        } else if (boxone.textContent==='O' && boxfour.textContent==='O' && boxseven.textContent==='O'){
            alert('Player O wins!')
        } else if (boxfour.textContent==='O' && boxfive.textContent==='O' && boxsix.textContent==='O'){
            alert('Player O wins!')
        } else if (boxseven.textContent==='O' && boxeight.textContent==='O' && boxnine.textContent==='O'){
            alert('Player O wins!')
        } else if (boxthree.textContent==='XO' && boxfive.textContent==='O' && boxseven.textContent==='O'){
            alert('Player O wins!')
        }}, 1500);
})