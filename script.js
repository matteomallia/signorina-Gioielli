function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    
    const targetId = typeof stepNumber === 'number' ? 'step-' + stepNumber : 'step-' + stepNumber;
    document.getElementById(targetId).classList.add('active');
}

/* LIVELLO 1 */
function checkChest(num) {
    const msg = document.getElementById('msg-1');
    if (num === 2) {
        msg.textContent = "Bravissima! Hai trovato la chiave! 🔑";
        setTimeout(() => nextStep(2), 1000);
    } else {
        msg.textContent = "Vuoto, riprova! 😜";
    }
}

/* LIVELLO 2 */
let firstCard = null;
function checkMemory(el, icon) {
    if (el.textContent !== '❓') return;
    el.textContent = icon;
    if (!firstCard) {
        firstCard = { element: el, icon: icon };
    } else {
        if (firstCard.icon === icon && icon === '🍰') {
            document.getElementById('msg-2').textContent = "Trovata la coppia di torte! 🍰";
            setTimeout(() => nextStep(3), 1000);
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

/* LIVELLO 3 */
function wrongAnswer() {
    alert("Risposta sbagliata! Riprova con la scelta più dolce! 😉");
}

/* LIVELLO 4 */
let simonStep = 0;
function pressSimon(color) {
    const msg = document.getElementById('msg-4');
    if (simonStep === 0 && color === 'pink') {
        simonStep = 1;
        msg.textContent = "Ottimo! Ora tocca l'Azzurro! 💙";
    } else if (simonStep === 1 && color === 'blue') {
        msg.textContent = "Perfetto! 🎶";
        setTimeout(() => nextStep(5), 1000);
    } else {
        simonStep = 0;
        msg.textContent = "Ops! Sequenza errata, ricomincia dal Rosa!";
    }
}

/* LIVELLO 5 */
function checkBush(isCorrect) {
    const msg = document.getElementById('msg-5');
    if (isCorrect) {
        msg.textContent = "Eccola! Trovata! 👑✨";
        setTimeout(() => nextStep(6), 1000);
    } else {
        msg.textContent = "C'è solo un funghetto 🍄! Riprova!";
    }
}

/* LIVELLO 6 */
let starsCaught = 0;
function catchStar(element) {
    element.style.visibility = 'hidden';
    starsCaught++;
    document.getElementById('star-count').textContent = starsCaught;
    if (starsCaught === 3) {
        setTimeout(() => nextStep(7), 600);
    }
}

/* LIVELLO TRABOCCHETTO: BOTTONE SÌ GIGANTE */
let noClicks = 0;
function noClicked() {
    noClicks++;
    const btnYes = document.getElementById('btn-yes');

    if (noClicks === 1) {
        btnYes.style.transform = "scale(1.5)";
    } else if (noClicks === 2) {
        btnYes.style.transform = "scale(2.2)";
    } else if (noClicks === 3) {
        btnYes.style.transform = "scale(3.5)";
    } else if (noClicks === 4) {
        btnYes.style.transform = "scale(5)";
    } else if (noClicks >= 5) {
        btnYes.style.position = "fixed";
        btnYes.style.top = "0";
        btnYes.style.left = "0";
        btnYes.style.width = "100vw";
        btnYes.style.height = "100vh";
        btnYes.style.borderRadius = "0";
        btnYes.style.fontSize = "3rem";
        btnYes.style.transform = "none";
        btnYes.textContent = "SÌ! ❤️";
    }
}

function yesClicked() {
    nextStep('stubborn');
}

/* FINALE */
function finishGame() {
    nextStep(8);
    createHearts();
}

function createHearts() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '💖';
            heart.style.left = (Math.random() * 80 + 10) + 'vw';
            heart.style.top = (Math.random() * 20 + 70) + 'vh';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
        }, i * 120);
    }
}