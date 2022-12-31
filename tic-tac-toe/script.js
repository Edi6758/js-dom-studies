const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []

let turnPlayer = ''

function updateTitle() {
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}

function initializeGame() {
    vBoard = [['','',''],['','',''],['','','']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Ves de: <span id="turnPlayer"></span>'
    updateTitle()
    boardRegions.forEach((element) => {
        element.classList.remove('win')
        element.innerText = ''
        element.addEventListener('click', handleBoardClick)
    })
}

function handleBoardClick(ev) {
    const region = ev.currentTarget.dataset.region
    const rowColumnPair = region.split('.')
}

document.getElementById('start').addEventListener('click', initializeGame)