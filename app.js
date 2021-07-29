document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector("#current-player")
    let currentPlayer = 1
    for (var i = 0, len = squares.length; i < len; i++)
        (function (index) {
            console.log(squares[i])
            squares[i].onclick = function () {
                if (!squares[index + 7].classList.contains('taken')) {
                    if (currentPlayer === 1) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-one')
                        currentPlayer = 2;
                        displayCurrentPlayer.innerHTML = currentPlayer
                    }
                    else if (currentPlayer === 2) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-two')
                        currentPlayer = 1;
                        displayCurrentPlayer.textContent = 1
                    }
                }
                else {
                    alert('cant go here')
                }
            }

        })(i)
})