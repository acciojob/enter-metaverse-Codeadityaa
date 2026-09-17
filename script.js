//your JS code here. If required.
const statusElement = document.getElementById('status');
const buttonElement = document.getElementById('enterBtn');

buttonElement.addEventListener('click', () => {
    statusElement.outerHTML = '<h1 id="status">Entered Metaverse</h1>';
});