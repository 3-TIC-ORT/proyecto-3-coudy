const textarea = document.getElementById('code');
const iframe = document.getElementById('preview');
const saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', updatePreview);

function updatePreview() {
    const content = textarea.value;

    if (containsAllowedTags(content)) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(content);
        iframe.contentWindow.document.close();
    } else {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write('<h4 style="color: red; text-align: center;">Hay errores en el código, por favor revise.</h4>');
        iframe.contentWindow.document.close();
    }
}

function containsAllowedTags(html) {
    const allowedTags = [
        '<a>', '<img>', '<figure>', '<figcaption>',
        '<ul>', '<ol>', '<li>', '<dl>', '<dt>', '<dd>',
        '<form>', '<input>', '<textarea>', '<button>',
        '<select>', '<option>', '<label>', '<fieldset>', '<legend>',
        '<output>', '<table>', '<caption>', '<thead>', '<tbody>', '<tfoot>',
        '<tr>', '<th>', '<td>', '<audio>', '<video>', '<source>', '<track>',
        '<embed>', '<object>', '<param>', '<iframe>', '<style>', '<link>',
        '<script>', '<noscript>', '<header>', '<nav>', '<main>', '<section>',
        '<article>', '<aside>', '<footer>', '<address>', '<time>', '<details>',
        '<summary>', '<dialog>', '<menu>', '<menuitem>', '<canvas>', '<svg>',
        '<math>', '<template>', '<slot>', '<p>', '<h1>', '<h2>', '<h3>', '<h4>',
        '<h5>', '<h6>', '<span>', '<div>', '<blockquote>', '<pre>', '<code>',
        '<br>', '<hr>', '<strong>', '<em>', '<b>', '<i>', '<u>', '<small>',
        '<mark>', '<del>', '<ins>', '<sup>', '<sub>'
    ];

    const tagRegex = new RegExp(allowedTags.join('|').replace(/</g, '\\<').replace(/>/g, '\\>'), 'g');
    
    return tagRegex.test(html);
}
