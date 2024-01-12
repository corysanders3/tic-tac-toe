var whosTurnSection = document.querySelector('.whos-turn')
var boardSection = document.querySelector('.board')
var playerSections = {
    playerOne: document.querySelector('.player-one'),
    playerTwo: document.querySelector('.player-two')
};
var dataSelector = document.querySelectorAll('[data-value]')

window.addEventListener('load', function() {
    createPlayer('playerOne', '&#x2658;', 'Player One');
    createPlayer('playerTwo', '&#x265E;', 'Player Two');
    updatePlayerDetails(players, playerSections);
    firstTurn();
});

boardSection.addEventListener('click', function(event){
    playSpace(event, players);
    pushSpace(dataSelector, playedPositions);
    checkIfWin(playedPositions, winningPositions);
});

var players = [];
var playedPositions = {
    playerOne: [],
    playerTwo: []
};

var winningPositions = ['012', '345', '678', '036', '147', '258', '048', '246'];

function createPlayer(id, token, playerName){
    var newPlayer = {
    id,
    token,
    wins: 0,
    name: playerName
    };
    players.push(newPlayer)
};

function updatePlayerDetails(allPlayers, section) {
    var playerSectionArray = Object.keys(section);

    for(var i = 0; i < allPlayers.length; i++) {
        for(var z = 0; z < playerSectionArray.length; z++) {
            if(allPlayers[i].id === playerSectionArray[i]) {
                playerSections[playerSectionArray[i]].innerHTML = `
                <h3>${allPlayers[i].name}</h3>
                <h4>${allPlayers[i].wins} wins</h4>
                <div class="emoji">${allPlayers[i].token}</div>`
            }
        }
    }
};

function firstTurn() {
    whosTurnSection.innerHTML = `
    <h1 id="${players[0].id}">It's <span>${players[0].token}</span>'s turn!</h1>`
};

function playSpace(event, allPlayers) {
    if(event.target.classList.contains('grid-space') && event.target.children[0] === undefined) {
        for(var i = 0; i < allPlayers.length; i++) {
            if(allPlayers[i].id === whosTurnSection.children[0].id) {
                event.target.innerHTML = `
                <div class="token" data-player="${allPlayers[i].id}">${allPlayers[i].token}</div>`
            }
        }
    }
};

function pushSpace(data, players) {
    for(var i = 0; i < data.length; i++) {
        if(data[i].children[0] !== undefined) {
            if(data[i].children[0].dataset.player === 'playerOne' && !players.playerOne.includes(data[i].dataset.value)) {
            players.playerOne.push(data[i].dataset.value)
            } else if (data[i].children[0].dataset.player === 'playerTwo' && !players.playerTwo.includes(data[i].dataset.value)) {
                players.playerTwo.push(data[i].dataset.value)
            }
        }
    }
};

function checkIfWin(playerSpots, winning) {
    for(var i = 0; i < winning.length; i++) {
        if(winning[i].split('').every(value => playerSpots.playerOne.includes(value))){
            console.log('Player One Wins')
        } else if(winning[i].split('').every(value => playerSpots.playerTwo.includes(value))) {
            console.log('Player Two Wins')
        } 
    }
    updateTurn(players)
}

function updateTurn(allPlayers) {
    console.log(event.target)
        for(var i = 0; i < allPlayers.length; i++) {
            if(allPlayers[i].id !== whosTurnSection.children[0].id && !event.target.className.includes('token') && !event.target.className.includes('board')) {
                return whosTurnSection.innerHTML = `
                <h1 id="${players[i].id}">It's <span>${players[i].token}</span>'s turn!</h1>`
                }
            }
};