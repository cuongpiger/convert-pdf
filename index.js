document.querySelector('.btn-convert').addEventListener('click', function() {
    let trans = document.querySelector('.txa-origin').value;
    trans = trans.split('\n\n').join('^');
    trans = trans.split('\n').join(' ');
    trans = trans.split('^').join('\n\n');
    trans = trans.split('’').join(`'`);
    trans = trans.split('”').join(`"`);
    trans = trans.split('“').join(`"`);

    document.querySelector('.txa-result').value = trans;
    document.querySelector('.txa-origin').value = "";
});

$(document).ready(function() {
    $('#textareaId').keydown(function (e) {
        if (e.ctrlKey && e.keyCode == 13) {
            let trans = document.querySelector('.txa-origin').value;
            trans = trans.split('\n\n').join('^');
            trans = trans.split('\n').join(' ');
            trans = trans.split('^').join('\n\n');
            trans = trans.split('’').join(`'`);
            trans = trans.split('”').join(`"`);
            trans = trans.split('“').join(`"`);

            document.querySelector('.txa-result').value = trans;
            document.querySelector('.txa-origin').value = "";
        }
    });
});
