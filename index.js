document.querySelector('.btn-convert').addEventListener('click', function() {
    let trans = document.querySelector('.txa-origin').value;
    trans = trans.split('\n').join(' ');

    document.querySelector('.txa-result').value = trans;
});