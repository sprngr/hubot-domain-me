# hubot-domain-me
> Quintessential package for generating dumb domain names, originally based off dumb.domains

[![Travis](https://img.shields.io/travis/sprngr/hubot-domain-me.svg?style=for-the-badge)](https://travis-ci.org/sprngr/hubot-domain-me)
[![npm](https://img.shields.io/npm/v/hubot-domain-me.svg?style=for-the-badge)](https://www.npmjs.com/package/hubot-domain-me)
![From Pittsburgh With Love](https://img.shields.io/badge/from%20pittsburgh%20with-%E2%9D%A4-yellow.svg?style=for-the-badge)

See [`src/domain-me.js`](src/domain-me.js) for full documentation.

Be sure to double check any dictionaries in use before installing for words your team may deem offensive:
- Internet tlds [`src/dict/tlds.json`](src/dict/tlds.json)
- Original list of semi-humorous words [`src/dict/original_words.json`](src/dict/original_words.json)
- Adjectives [`src/dict/adjs.json`](src/dict/adjs.json)
- Nouns [`src/dict/nouns.json`](src/dict/nouns.json)
- Personal Nouns [`src/dict/personal_nouns.json`](src/dict/personal_nouns.json)
- States of Drunkenness [`src/dict/states_of_drunkenness.json`](src/dict/states_of_drunkenness.json)

At this time one list from the original set and the States of Drunkenness are only enabled when `HUBOT_DOMAIN_ME_SFW` is `FALSE`.

## Installation

In your hubot project repo, run:

`npm install hubot-domain-me --save`

Then add **hubot-domain-me** to your `external-scripts.json`:

```json
[
  "hubot-domain-me"
]
```
## Configuration

`HUBOT_DOMAIN_ME_SFW` - Default `FALSE` - An optional flag if you want all output to only use the clean word dictionaries. Set to `TRUE` to enable.

## Sample Interaction
![image](example.png)

## License
MIT &copy; [Michael Springer](https://github.com/sprngr) 2018
