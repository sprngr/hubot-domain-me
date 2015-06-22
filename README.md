# hubot-domain-me

[![npm version](https://badge.fury.io/js/hubot-domain-me.svg)](http://badge.fury.io/js/hubot-domain-me) [![Build Status](https://travis-ci.org/sprngr/hubot-domain-me.png)](https://travis-ci.org/sprngr/hubot-domain-me)

Quintessential package for generating dumb domain names, based off dumb.domains

See [`src/domain-me.coffee`](src/domain-me.coffee) for full documentation.

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

`HUBOT_DOMAIN_ME_SFW` - An optional flag if you want all output to only use the clean word dictionary. Set to TRUE to enable.

## Sample Interaction
![image](example.png)

## Changelog

### v1.1.0
* Splits the dictionary into clean and nsfw, defaults to nsfw
* Word list is configurable via HUBOT_DOMAIN_ME_SFW environment variable
* The code is considerably cleaner

### v1.0.4
* [clownpenis.fart](http://vimeo.com/82393638)

### v1.0.3
* Updated the suggestions list.
* I really was just adjusting keywords in package.json and needed an excuse to push.

### v1.0.2
* Added 195 gTLDs to the list, I wish I was making some of these up.
* Broke out the dictionary arrays into separate files. I need to add more words to the suggestion list.

### v1.0.1
* Changed the way the domain string is built.
* Had internal conflicts about adding the protocol to the domain, too risky with unfurling.

### v1.0.0
* Inital release
* Generates dumb domains from a dictionary of suggested names and gTLDs.
* Totally didn't rip contents from dumb.domains.
