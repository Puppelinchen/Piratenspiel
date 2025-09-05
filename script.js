let Frame = 0;
let State = 'IDLE';

setInterval(moveCharacter, 100);

function moveCharacter() {
  character.src = `img/pirat/2_entity_000_${State}_00${Frame}.png`;
  Frame++;

  if (Frame == 7) {
    Frame = 0;
  }
}


function setState(newState) {
    Frame = 0;
    State = newState;
}