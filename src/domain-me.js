'use strict'
// Description:
//   Quintesential package for generating dumb domain names, originally based off dumb.domains
//
// Dependencies:
//   None
//
// Configuration:
//   HUBOT_DOMAIN_ME_SFW - set to TRUE if you want only safe for work words used.
//
// Commands:
//   hubot domain me - returns a random domain name
//
// Author:
//  sprngr

const tlds = require('./dict/tlds.json');
let words = require('./dict/words-clean.json');

if (process.env.HUBOT_DOMAIN_ME_SFW) {
    words = words.concat(require('./dict/words-nsfw.json'));
}

module.exports = (robot) => {
    robot.respond(/domain(\s+me)?$/, (msg) => {
        return msg.send(`${msg.random(words)}.${msg.random(tlds)}`);
    });
};
