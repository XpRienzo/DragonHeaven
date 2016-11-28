//* yellow plugin by iAlain

exports.commands = {
  thunder: 'yellow',
  yellow: function(target, room, user){
          if (user.can('broadcast', null, room)) {
                var colors = ['#ffff00'];
                if(!target) return this.sendReply('/yellow message');
                       var userColor = '',
                        currentDate = new Date(),
                        randomNumber = '';
                        for(var x = 0; x < user.name.length; x++){
                                randomNumber = Math.floor(Math.random() * colors.length);
                                if(user.name.substring(x, x + 1) !== undefined){
                                        userColor += '<font color="' + colors[randomNumber] + '">' + user.name.substring(x, x + 1) + '</font>';
                                } else {
                                        userColor += '<font color="' + colors[randomNumber] + '">:</font>';
                                }
                        }
                        if(target.indexOf('/me') > -1) {
                                room.add('|raw|<small><i>' + user.group + '</small><b>' + userColor + '</b>' + Tools.escapeHTML(target.substring(3, target.length)) + '</i>');
                        } else {
                                room.add('|raw|<small>' + user.group + '</small><b>' + userColor + '</b>: ' + target);
                        }
          }
          else return this.errorReply('You must be voiced to use this command.');
  },
        yellowhelp: ["/yellow [message] - Displays A message with the username in yellow color. Requires Minimum of + Rank"]
        };
