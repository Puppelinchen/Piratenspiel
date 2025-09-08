let Frame = 0;
let State = 'IDLE';
let left = 0;
let leftArrow = false
let rightArrow = false
let attacking = false

setInterval(moveCharacter, 100);
setInterval(updateGame, 13);
document.onkeyup = unCheckKey;

function moveCharacter() {
    character.src = `img/pirat/2_entity_000_${State}_00${Frame}.png`;
    Frame++;
    if (leftArrow) {
        character.style.transform = 'scaleX(-1)';
    }

    if (rightArrow) {
        character.style.transform = 'scaleX(1)';
    }

    if (Frame == 7) {
        Frame = 0;
        attacking = false;
    } if (e.keyCode == '68') {
        attacking = true;
    }
}

function unCheckKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        leftArrow = false;

    }
    else if (e.keyCode == '39') {
        rightArrow = false;

    }
}

function updateGame() {
    CurrentBackground.style.left = `${left}px`; // <-- Ändere das left-Attribut
    if (leftArrow) {
        left += 5;
    }
    if (rightArrow) {
        left -= 5;
    }

    if (attacking) {
        setState('ATTACK');
    }

    else if (leftArrow || rightArrow) {
        setState('WALK');
    } else {
        setState('IDLE');
    }
}


function setState(newState) {
    if (State !== newState) {
        Frame = 0;
        State = newState;
    }
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == 37) {
        leftArrow = true;
        setState('WALK');
    }
    else if (e.keyCode == 39) {
        rightArrow = true;
        setState('WALK');
    }
    else if (e.keyCode == 68) { // Taste "D"
        attacking = true;
        setState('ATTACK');    }
}