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

if (boxone.textContent==='X' && boxtwo.textContent==='X' && boxthree.textContent==='X'){
    header.innerHTML = "<style color='blue><strong>X Wins!</strong></style>"
    alert('Player X wins!')

}