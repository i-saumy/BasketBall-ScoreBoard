let countEl = document.getElementById('count-el');
let countIl = document.getElementById('count-il');

let countHome = 0;
let countGuest = 0;

function add1Home(){
    countHome += 1;
    countEl.textContent = countHome;
}

function add2Home(){
    countHome += 2;
    countEl.textContent = countHome;
}

function add3Home(){
    countHome += 3;
    countEl.textContent = countHome;
}

function add1Guest(){
    countGuest += 1;
    countIl.textContent = countGuest;
}

function add2Guest(){
    countGuest += 2;
    countIl.textContent = countGuest;
}

function add3Guest(){
    countGuest += 3;
    countIl.textContent = countGuest;
}
