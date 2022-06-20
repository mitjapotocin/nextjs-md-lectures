const fs = require('fs');
const postType = process.argv.at(2)
const folderName = process.argv.at(3)

if (!postType || ['books', 'chapters'].indexOf(postType) === -1) {
    throw 'Please specify a post type: "book" or "chapter"';
}
if (!folderName) {
    console.log('Please provide a folder name as an argument.')
    return;
}

const boilerplatePath = `./public/${postType}`;
const folderPath = `./public/${postType}/${folderName}`;

fs.mkdir(`${folderPath}/`, { recursive: true }, (err) => {
    if (err) throw err;

    /**
     * Copy boilerplate.md
     */
    fs.copyFile(
        `${boilerplatePath}/boilerplate.md`,
        `${folderPath}/index.md`,
        (err) => {
            if (err) throw err;

            console.log('=-=-=-=-=-=-=-=-=')
            console.log('')
            console.log(`New ${postType} ${folderName} was created.`);
            console.log('')
            console.log('=-=-=-=-=-=-=-=-=')
            console.log('')
        }
    );

    /**
     * Copy example image if exists
     */
    fs.copyFile(
        `${boilerplatePath}/example.png`,
        `${folderPath}/example.png`,
        () => { } // no error handling
    );
});