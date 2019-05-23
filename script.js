var scores, roundScore, activePlayer;
var gamePlaying;
init();

//Button Roll Dice Function

document.querySelector('.btn-roll').addEventListener('click', function() {

  if(gamePlaying)
  {
    var dice =  Math.floor(Math.random() * 6) +1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.jpeg';

    if(dice!==1){
      roundScore +=dice;
      document.querySelector('#current-' + activePlayer).textContent=roundScore;
    }
    else{
      nextPlayer();

    }

  }

});

//Button Hold Dice Function

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying)
  {
    scores[activePlayer]+=roundScore;

    document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer];
    if(scores[activePlayer]>=20){
      document.querySelector('#name-'+ activePlayer).textContent='WINNER!!';
      document.querySelector('.dice').style.display= 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying=false;
    }
    else{
      nextPlayer();
    } 
  }

});

//Button New Dice Function

document.querySelector('.btn-new').addEventListener('click', init);

//Global Function

function nextPlayer(){
  activePlayer===0?activePlayer=1:activePlayer=0;
  roundScore =0;

  document.getElementById('current-0').textContent =0;
  document.getElementById('current-1').textContent =0;


  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display= 'none';
}
function init(){
  scores=[0,0];
  roundScore=0;
  activePlayer=0;
  gamePlaying=true;
  document.querySelector('#score-0').textContent = 0;
  document.getElementById('score-1').textContent = '0';
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#name-0').textContent='PLAYER 1';
  document.querySelector('#name-1').textContent='PLAYER 2';
  document.querySelector('.dice').style.display = "none";
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

}