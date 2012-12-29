module.exports = function (pkg) {
    var m;
    if (m = match(JSON.stringify(pkg.repository))) {
        return m;
    }
    else if (m = match(JSON.stringify(pkg))) {
        return m;
    }
    return undefined;
};

function match (str) {
    var m = /github.com[:\/]([^\/"]+)\/([^\/"]+)/.exec(str);
    if (m) {
        return m[1] + '/' + m[2].replace(/\.git$/, '');
    }
}
