
let url = window.location.href;

let newURL = url.replace(/www/, 'old');

window.stop();

window.location.href = newURL;
