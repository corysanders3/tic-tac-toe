var whosTurnSection = document.querySelector('.whos-turn')
var boardSection = document.querySelector('.board')
var playerSections = {
    playerOne: document.querySelector('.player-one'),
    playerTwo: document.querySelector('.player-two')
};

window.addEventListener('load', function() {
    createPlayer('playerOne', '&#x2658;', 'Player One');
    createPlayer('playerTwo', '&#x265E;', 'Player Two');
    updatePlayerDetails(players, playerSections);
    firstTurn();
});

boardSection.addEventListener('click', function(event){
    playSpace(event, players);
    updateTurn(players);
});

var players = [];

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
    if(event.target.classList.contains('grid-space')) {
        for(var i = 0; i < allPlayers.length; i++) {
            if(allPlayers[i].id === whosTurnSection.children[0].id) {
                event.target.innerHTML = `
                <div class="token" data-player="${allPlayers[i].id}">${allPlayers[i].token}</div>`
            }
        }
    }
};

function updateTurn(allPlayers) {
    for(var i = 0; i < allPlayers.length; i++) {
        if(allPlayers[i].id !== whosTurnSection.children[0].id) {
            return whosTurnSection.innerHTML = `
            <h1 id="${players[i].id}">It's <span>${players[i].token}</span>'s turn!</h1>`
        }
    }
};

//window.prompt('Enter First Name:', 'Player One')