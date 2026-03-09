const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://supersimplebackend.dev');

xhr.addEventListener('load', () => {
    xhr.response
});

xhr.send(); 
/* This is an asynchronous operation, 
so the code will continue executing while the 
request is being made. */

