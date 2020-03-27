var squares = document.querySelectorAll('.col')

function change(){
    if (this.textContent === ''){
        this.innerHTML = '<div style="color:red">X</div>';
    } else if (this.textContent ==='X'){
        this.innerHTML = '<div style="color:blue">O</div>';
    } else {
        this.textContent = '';
    }
    setTimeout(function() {
        winCondition();
    }, 1500);
}

for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click',change)
    // squares[i].addEventListener('click',winCondition(squares))
}

function winCondition(){
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
