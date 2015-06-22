# Description:
#   Quintesential package for generating dumb domain names, based off dumb.domains
#
# Dependencies:
#   None
#
# Configuration:
#   HUBOT_DOMAIN_ME_SFW - set to TRUE if you want only safe for work words used.
#
# Commands:
#   hubot domain me - returns a random domain name
#
# Author:
#  sprngr

tlds = require('./dict/tlds.json')
words = require('./dict/words-clean.json')

unless process.env.HUBOT_DOMAIN_ME_SFW?
  words = words.concat(require('./dict/words-nsfw.json'))

module.exports = (robot) ->

    robot.respond /domain( me)?$/, (msg) ->
        msg.send "#{msg.random words}.#{msg.random tlds}"
