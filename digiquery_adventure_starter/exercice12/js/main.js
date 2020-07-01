var buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function () {
    var pEl = document.createElement('p');
    pEl.textContent = 'button clicked';
    document.querySelector('#exercise').appendChild(pEl);
});