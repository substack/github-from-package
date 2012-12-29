var github = require('github-from-package');
var url = github(require('./package.json'));
console.log(url);
