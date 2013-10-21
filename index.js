var local = require('repl').start('repl-util > ')
  , colors = {
      normal: '\033[0m'
    , command: '\033[33m'
    , usage: '\033[36m'
    , example: '\033[90m'
    };

//
// Add color to some text.
//
var color = function(text, color) {
  return colors[color] + text + colors.normal;
};

//
// Set helper.
// Returns a function with the correct node-style signature for setting the
//    return value of a function to a local variable.
//
local.context.set = function(name) {
  return function(err, value) {
    if (err) throw err;
    local.context[name] = value;
  };
};

//
// Print some help text out.
//
local.context.help = function() {
  var helpText =
    [
      ''
    , color('Repl-Utils', 'command')
    , color('==========', 'command')
    , color('A collection of helpers for simplifying your life in REPL.\n', 'example')
    , color('The following commands are available:\n', 'example')
    , color('  set', 'command')
    , color('  usage:', 'usage')
    , color('    fs.readFile(\'file.js\', \'utf-8\', set(\'contents\'));', 'example')
    ];

  process.stdout.write(helpText.join('\n'));

  return '';
};
