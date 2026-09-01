// GIF animate per ciascun livello
const gifs = {
    0: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtYXRwOGMxbmdvdnV3dWFxMXlsZ3lreHMxaDR0ZHFlZXZyYjJ3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26gsu8UaL0yYj6T6w/giphy.gif", // Intro
    1: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpjcHRjZ241aXFlN2E3cmloc2I0MWYydTExbDFmdmRnc3I1eXF5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSxAOx23S9g1zG/giphy.gif", // Cammina / Cerca
    2: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJkYTZxeGJocTB3aGNnY21xcGN0aHozOWprNHIxeHZjMHA2N2U0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlCqV35hdEg2GUo/giphy.gif", // Dolci
    3: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRkOW11bzNvZ3dneW5saDJrcXV6dHc5ZXByZ2trbmMwbGNqMGs3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xeJpnrWC4XWblEk/giphy.gif", // Quiz
    4: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZza29zcnlyOTMxbGlvdWVrbm5hMWlyeXprZ2UzbzhhM2x2cTRuOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6UB5RrlvqN3R1A64/giphy.gif", // Musica
    5: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWc1bGs3OXBwbzByczRndHNzcWFmZXB5bjVmdm96ZXl2eGFmbWFpZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d30mgvM8XajPe3Yc/giphy.gif", // Nascondino
    6: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWYxb28ycDR6MmppZXo4ODQycm9jcDRsZjdpNGtzOHpwcGJnNWFmdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26fldmIp6PeajE4EV/giphy.gif", // Stelle
    7: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVjZHFncnoxYmtubGN3YjhxaXByam81OWRtdzJ2bHZwNDNydmRzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0FKVYC3LThF56y1C/giphy.gif", // Pre-finale
    8: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3UxeHFmZHdvaHBlOXE4ZjNldzZ3dDlyMnJpdW05ZjdwczF0aXFmbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JHRhAtnJSDNJ2py/giphy.gif"  // Vittoria
};

function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('step-' + stepNumber).classList.add('active');
    
    // Aggiorna l'immagine GIF dinamica se presente
    const imgEl = document.getElementById('char-img');
    if (gifs[stepNumber]) {
        imgEl.src = gifs[stepNumber];
    }
}

/* Lvl 1 */
function checkChest(num) {
    const msg = document.getElementById('msg-1');
    if (num === 2) {
        msg.textContent = "Chiave trovata! 🔑";
        setTimeout(() => nextStep(2), 900);
    } else {
        msg.textContent = "Vuoto, riprova! 😜";
    }
}

/* Lvl 2 */
let firstCard = null;
function checkMemory(el, icon) {
    if (el.textContent !== '❓') return;
    el.textContent = icon;
    if (!firstCard) {
        firstCard = { element: el, icon: icon };
    } else {
        if (firstCard.icon === icon && icon === '🍰') {
            document.getElementById('msg-2').textContent = "Accoppiata vincente! 🍰";
            setTimeout(() => nextStep(3), 900);
        } else {
            let prev = firstCard.element;
            setTimeout(() => {
                el.textContent = '❓';
                prev.textContent = '❓';
            }, 600);
            firstCard = null;
        }
    }
}

/* Lvl 3 */
function wrongAnswer() {
    alert("Opzione errata! Riprova con la scelta più dolce. 😉");
}

/* Lvl 4 */
let simonStep = 0;
function pressSimon(color) {
    const msg = document.getElementById('msg-4');
    if (simonStep === 0 && color === 'pink') {
        simonStep = 1;
        msg.textContent = "Bene! Ora l'Azzurro 💙";
    } else if (simonStep === 1 && color === 'blue') {
        msg.textContent = "Sequenza corretta! 🎶";
        setTimeout(() => nextStep(5), 900);
    } else {
        simonStep = 0;
        msg.textContent = "Errato! Si parte dal Rosa.";
    }
}

/* Lvl 5 */
function checkBush(isCorrect) {
    const msg = document.getElementById('msg-5');
    if (isCorrect) {
        msg.textContent = "Trovata! 👑✨";
        setTimeout(() => nextStep(6), 900);
    } else {
        msg.textContent = "C'è solo un funghetto 🍄!";
    }
}

/* Lvl 6 */
let starsCaught = 0;
function catchStar(element) {
    element.style.visibility = 'hidden';
    starsCaught++;
    document.getElementById('star-count').textContent = starsCaught;
    if (starsCaught === 3) {
        setTimeout(() => nextStep(7), 600);
    }
}

/* Finale */
function finishGame() {
    nextStep(8);
    createHearts();
}

function createHearts() {
    for (let i = 0; i < 22; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '💖';
            heart.style.left = (Math.random() * 80 + 10) + 'vw';
            heart.style.top = (Math.random() * 20 + 70) + 'vh';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
        }, i * 110);
    }
}