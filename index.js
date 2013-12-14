require('shelljs/global');
module.exports = function() {
  exec('npm install');
  exec('bower install');
  if (!which('grunt')) {
    echo('\n\ngrunt command not found, please `npm install -g grunt-cli`');
  } else {
    exec('grunt build');
  }
};

