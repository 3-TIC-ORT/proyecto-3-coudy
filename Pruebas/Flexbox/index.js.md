const textarea = document.getElementById('code');
const iframe = document.getElementById('preview');
const saveButton = document.getElementById('save-btn');
const sugerenciasDiv = document.getElementById("sugerencias");

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

    const tagRegex = new RegExp(`<(${allowedTags.join('|').slice(1, -1)})>`, 'g');
    
    return tagRegex.test(html);
}

const sugerencias = [
    'a', 'img', 'figure', 'figcaption', 'ul', 'ol', 'li', 'dl', 'dt', 'dd',
    'form', 'input', 'textarea', 'button', 'select', 'option', 'label', 'fieldset', 'legend',
    'output', 'table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
    'audio', 'video', 'source', 'track', 'embed', 'object', 'param', 'iframe',
    'style', 'link', 'script', 'noscript', 'header', 'nav', 'main', 'section',
    'article', 'aside', 'footer', 'address', 'time', 'details', 'summary', 'dialog',
    'menu', 'menuitem', 'canvas', 'svg', 'math', 'template', 'slot', 'p', 'h1', 'h2',
    'h3', 'h4', 'h5', 'h6', 'span', 'div', 'blockquote', 'pre', 'code', 'br', 'hr',
    'strong', 'em', 'b', 'i', 'u', 'small', 'mark', 'del', 'ins', 'sup', 'sub'
];

textarea.addEventListener('input', escribir);
textarea.addEventListener('keydown', manejarAtajo);

function escribir() {
    const texto = this.value;
    sugerenciasDiv.innerHTML = '';

    if (texto.trim()) {
        sugerencias.forEach(sugerencia => {
            if (sugerencia.startsWith(texto.trim())) {
                const div = document.createElement('div');
                div.textContent = sugerencia;
                div.addEventListener("click", () => {
                    const cursorPos = textarea.selectionStart;
                    const beforeText = textarea.value.substring(0, cursorPos);
                    const afterText = textarea.value.substring(cursorPos);
                    
                    // Insertar la etiqueta con el cursor posicionado entre las etiquetas
                    const tag = `<${sugerencia}></${sugerencia}>`;
                    textarea.value = `${beforeText}${tag}${afterText}`;

                    // Establecer la posición del cursor dentro de la etiqueta
                    textarea.selectionStart = textarea.selectionEnd = beforeText.length + `<${sugerencia}>`.length;
                    sugerenciasDiv.style.display = 'none';
                });
                sugerenciasDiv.appendChild(div);
            }
        });
        sugerenciasDiv.style.display = 'block';
    } else {
        sugerenciasDiv.style.display = 'none';
    }
}

function manejarAtajo(event) {
    if (event.key === 'Enter' && textarea.value.trim() === '!') {
        event.preventDefault();
        const cursorPos = textarea.selectionStart;
        const beforeText = textarea.value.substring(0, cursorPos);
        const afterText = textarea.value.substring(cursorPos);

        // Insertar el código HTML básico solo si no está presente
        const basicHTML = `<!DOCTYPE html>\n<html lang="es">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Título</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n\n</body>\n</html>`;
        
        if (!textarea.value.includes('<!DOCTYPE html>')) {
            textarea.value = `${beforeText}${basicHTML}${afterText}`;
            textarea.selectionStart = textarea.selectionEnd = beforeText.length + basicHTML.indexOf('<title>') + '<title>'.length;
        }
    }
}
