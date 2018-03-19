'use strict'
// Description:
//   Quintesential package for generating dumb domain names, originally based off dumb.domains
//
// Dependencies:
//   None
//
// Configuration:
//   HUBOT_DOMAIN_ME_SFW - set to TRUE if you want only safe for work words used, defaults to FALSE.
//
// Commands:
//   hubot domain me - returns a random domain name
//
// Author:
//  sprngr

// Import and assemble dictionaries
const tlds = require('./dict/tlds.json').tlds;
let words = assembleDictionary();

// Combines specific json dictionaries together as one flat array of strings
function assembleDictionary() {
    const dictionaries = [
        require('./dict/original_words.json').cleanWords,
        require('./dict/adjs.json').adjs,
        require('./dict/nouns.json').nouns,
        require('./dict/personal_nouns.json').personalNouns,
    ];
    let dictionary = [].concat.apply([], dictionaries);

    if (process.env.HUBOT_DOMAIN_ME_SFW == null) {
        const nsfwDictionaries = [
            require('./dict/original_words.json').nsfwWords,
            require('./dict/states_of_drunkenness.json').states_of_drunkenness
        ];

        dictionary = [].concat.apply(dictionary, nsfwDictionaries);
    }

    return dictionary;
}

module.exports = (robot) => {
    robot.respond(/domain(\s+me)?$/, (msg) => {
        return msg.send(
            `${msg.random(words)}.${msg.random(tlds)}`.replace(' ', '-')
        );
    });
};
