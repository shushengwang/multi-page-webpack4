const fs = require('fs');
const path = require("path");

const HTML_ROOT_PATH = path.resolve(__dirname, "src");
var htmlfiles = [];
fs.readdirSync(HTML_ROOT_PATH).forEach(item => {
    if (item.indexOf('html') > -1) {
        htmlfiles.push(item.split('.')[0]);
    }
});
console.log(htmlfiles);

module.exports = {
    HTMLDirs: htmlfiles,
    devServerOutputPath: "./dist",

}
