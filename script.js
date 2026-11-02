//your JS code here. If required.
const statusElement = document.getElementById('status');
const buttonElement = document.getElementById('enterBtn');

buttonElement.addEventListener('click', () => {
    statusElement.innerHTML = '<h1>Entered Metaverse</h1>';
});