/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var jugadores, puntaje, jugadoractivo,gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
         if(gamePlaying) {
            //1. random number
            var dados = Math.floor (Math.random() *6) +1;
                            
            //2. display the result 
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src ='dice-' + dados + '.jpeg';

            //3.update the round score IF the rolled number was NOT a 1
            if(dados !== 1) {
                puntaje  += dados;
                document.querySelector('#current-' + jugadoractivo).textContent  = puntaje;

            } 
            else{
            siguientejugador();  
            }
         }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
     //add current score global score
    jugadores[jugadoractivo] += puntaje;
    

    // update the ui 
    document.querySelector('#score-' + jugadoractivo).textContent = jugadores[jugadoractivo];



    //check ifwon the game
   if (jugadores[jugadoractivo] >= 100) {
       document.querySelector('#name-' + jugadoractivo).textContent = '¡GANADOR!';
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-' + jugadoractivo + '-panel').classList.add('winner');
       document.querySelector('.player-' + jugadoractivo + '-panel').classList.remove('active');
       gamePlaying = false;
    }else {
       
    siguientejugador();
   }
    }
});

function siguientejugador() {
    jugadoractivo === 0 ? jugadoractivo = 1 : jugadoractivo = 0;
    puntaje = 0;

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   document.querySelector('.dice').style.display = 'none';


}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    jugadores = [0,0];
    jugadoractivo = 0;
    puntaje = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'jugador 1';
    document.getElementById('name-1').textContent = 'jugador 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};



   
