
export function isAllowedPaths(slug) {
    return !(slug.includes('.DS_Store') || slug.includes('.md'));
}

export function parseMd(content, imgRelativePath = '') {
    if (imgRelativePath) {
        content = content.replaceAll('](/', `](${imgRelativePath}/`);
        content = content.replaceAll('src="/', `img src="${imgRelativePath}/`);
    }
    
    const macroStart = '<!!!';
    const macroEnd = '!!!>';

    let startIndex = content.indexOf(macroStart);
    let endIndex = content.indexOf(macroEnd);

    if (startIndex === -1 || endIndex === -1) { 
        return content;
    }

    let macro = content
        .substring(startIndex + macroStart.length, endIndex)
        .split(' ')
        .map(s => s.trim())
        .filter(s => !s.includes(macroStart) && !s.includes(macroEnd))
        .filter(Boolean);

    let insert = `<div ${macro.map(m => ('data-' + m)).join(' ')}></div>` + '\n';

    return parseMd(content.substring(0, startIndex) + insert + content.substring(endIndex + macroEnd.length))
}

module.exports = {
    isAllowedPaths,
    parseMd
};
