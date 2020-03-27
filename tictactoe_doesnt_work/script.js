var squares = document.querySelectorAll('.col')

function change(){
    if (this.textContent === ''){
        this.innerHTML = '<div style="color:red">X</div>';
    } else if (this.textContent ==='X'){
        this.innerHTML = '<div style="color:blue">O</div>';
    } else {
        this.textContent = '';
    }
}

for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click',change)
    winCondition(squares[i])
}

function winCondition(squares){
    winningLines =
    [[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];

    for (var i = 0; i < winningLines.length; i++){
        let [box1,box2,box3] = winningLines[i];
        if (squares[box1].textContent === squares[box2].textContent && squares[box2].textContent === squares[box3].textContent && squares[box1].textContent !== ''){
            alert('Player ' + squares[box1].textContent + ' wins!')
        }
    }
}


// document.addEventListener('click',function(){
//     setTimeout(function() {
//         if (squares[0].textContent==='X' && squares[1].textContent==='X' && squares[2].textContent==='X'){
//             alert('Player X wins!')
//         } else if (squares[0].textContent==='X' && squares[4].textContent==='X' && squares[8].textContent==='X'){
//             alert('Player X wins!')
//         } else if (squares[0].textContent==='X' && squares[3].textContent==='X' && squares[6].textContent==='X'){
//             alert('Player X wins!')
//         } else if (squares[0].textContent==='X' && squares[4].textContent==='X' && squares[7].textContent==='X'){
//             alert('Player X wins!')
//         } else if (squares[2].textContent==='X' && squares[5].textContent==='X' && squares[8].textContent==='X'){
//             alert('Player X wins!')
//         } else if (squares[0].textContent==='X' && squares[3].textContent==='X' && squares[6].textContent==='X'){
//             alert('Player X wins!')
//         } else if (squares[3].textContent==='X' && squares[4].textContent==='X' && squares[5].textContent==='X'){
//             alert('Player X wins!')
//         } else if (squares[6].textContent==='X' && squares[7].textContent==='X' && squares[8].textContent==='X'){
//             alert('Player X wins!')
//         } else if (squares[2].textContent==='X' && squares[4].textContent==='X' && squares[6].textContent==='X'){
//             alert('Player X wins!')
//         }}, 1500);
// })

// document.addEventListener('dblclick',function(){
//     setTimeout(function() {
//         if (squares[0].textContent==='O' && squares[1].textContent==='O' && squares[2].textContent==='O'){
//             alert('Player O wins!')
//         } else if (squares[0].textContent==='O' && squares[4].textContent==='O' && squares[8].textContent==='O'){
//             alert('Player O wins!')
//         } else if (squares[0].textContent==='O' && squares[3].textContent==='O' && squares[6].textContent==='O'){
//             alert('Player O wins!')
//         } else if (squares[0].textContent==='O' && squares[4].textContent==='O' && squares[7].textContent==='O'){
//             alert('Player O wins!')
//         } else if (squares[2].textContent==='O' && squares[5].textContent==='O' && squares[8].textContent==='O'){
//             alert('Player O wins!')
//         } else if (squares[0].textContent==='O' && squares[3].textContent==='O' && squares[6].textContent==='O'){
//             alert('Player O wins!')
//         } else if (squares[3].textContent==='O' && squares[4].textContent==='O' && squares[5].textContent==='O'){
//             alert('Player O wins!')
//         } else if (squares[6].textContent==='O' && squares[7].textContent==='O' && squares[8].textContent==='O'){
//             alert('Player O wins!')
//         } else if (squares[2].textContent==='O' && squares[4].textContent==='O' && squares[6].textContent==='O'){
//             alert('Player O wins!')
//         }}, 1500);
// })