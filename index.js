module.exports = function (pkg) {
    return match(JSON.stringify(pkg.repository)) ||
             match(JSON.stringify(pkg)) ||
             undefined;
};

function match (str) {
    var m = /\bgithub.com[:\/]([^\/"]+)\/([^\/"]+)/.exec(str);
    if (m) {
        return 'https://github.com/' + m[1] + '/' + m[2].replace(/\.git$/, '');
    }
}
