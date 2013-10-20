var path = 'https://raw.github.com/Mafufa/Plug/plugbot-loader.js';

function print(msg)

  $('#chat-messages').append('<div class="chat-update"><span class="chat-text" style="color:#ffd900;font-weight:bold">' + msg + '</span></div>');

var scriptFail = window.setTimeout(function() {
  print('plug.bot couldn\'t load.  Check out the "Basic Troubleshooting" section of the readme on github.com.  Chances are it\'s a simple fix.');
}, 2000);

$.getScript(path + '/plugbot.js', function() {
  print('plug.bot says hello.');
  window.clearTimeout(scriptFail);
});
