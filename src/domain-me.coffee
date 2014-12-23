# Description:
#   Quintesential package for generating dumb domain names, based off dumb.domains
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot domain me - returns a random domain name
#
# Author:
#  sprngr

tlds = require('./dict/tlds.json')
words = require('./dict/words.json')

module.exports = (robot) ->

    robot.respond /domain( me)?$/, (msg) ->
        msg.send "#{msg.random words.suggestions}.#{msg.random tlds.gtlds}"
