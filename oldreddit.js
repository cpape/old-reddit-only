
window.stop();

let url = window.location.href;

let newURL = url.replace(/www/, 'old');

window.location.href = newURL;
