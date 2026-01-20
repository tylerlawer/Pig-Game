console.log("app.js loaded");

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready');
    console.log(document.getElementById('dice_img'));
    loadDice();
});


function loadDice() {
    document.getElementById('dice_img').src = './src/dice-1.png';
}