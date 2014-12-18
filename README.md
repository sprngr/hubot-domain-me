# hubot-domain-me

[![Build Status](https://travis-ci.org/sprngr/hubot-domain-me.png)](https://travis-ci.org/sprngr/hubot-domain-me)

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

## Sample Interaction
![image](example.png)

## Changelog

### v1.0.1
* Changed the way the domain string is built
* Had internal conflicts about adding the protocol to the domain, too risky with unfurling

### v1.0.0
* Inital release
* Generates dumb domains from a dictionary of suggested names and gTLDs
* Totally didn't rip contents from dumb.domains
