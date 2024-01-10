//QuerySelectors
var whosTurnSection = document.querySelector('.whos-turn')
var playerSections = {
    playerOne: document.querySelector('.player-one'),
    playerTwo: document.querySelector('.player-two')
}

//Event Listeners
window.addEventListener('load', function() {
    createPlayer('playerOne', '&#x2658;', 'Player One');
    createPlayer('playerTwo', '&#x265E;', 'Player Two');
    updatePlayerDetails(players, playerSections);
});

//Data Model
var players = [];

//Functions
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
    var playerSectionArray = Object.keys(section)
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
}



//window.prompt('Enter First Name:', 'Player One')