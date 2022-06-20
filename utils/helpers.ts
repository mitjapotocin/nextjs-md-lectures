export function isAllowedPath(slug: string): boolean {
    return !(slug.includes('.DS_Store') || slug.includes('.md'));
}

export function parseMd(content: string, imgRelativePath: string = '') {
    content = addRelativePathToImages(content, imgRelativePath);

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

function addRelativePathToImages(
    content: string,
    imgRelativePath: string
): string {
    if (!imgRelativePath || !content) {
        return content;
    }

    // Add relative path IF img src does NOT start with 'http' OR '/'
    return content
        .replace(/src="(?!(http)|(\/))/g, `src="${imgRelativePath}/`)
        .replace(/\]\((?!(http)|(\/))/g, `](${imgRelativePath}/`);
}

module.exports = {
    isAllowedPath,
    parseMd
};
