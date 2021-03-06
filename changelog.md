Change Log
==========

This project honours [Semantic Versioning](http://semver.org/).

### v2.0.3
* Fix dependency issue
* Update repository organization + readme

### v2.0.2
* Fix for NSFW flag causing the entire dictionary to be overwritten

### v2.0.1
* Fix dictionary being undefined because I didn't concat arrays right

### v2.0.0
* Decaffeinated
* Updated dictionary for tlds with data from https://data.iana.org/TLD/tlds-alpha-by-domain.txt
* Adds dictionaries for nouns, adj, verbs, etc from https://github.com/dariusk/corpora
* Restructures dictionary format to follow suit

### v1.1.0
* Splits the dictionary into clean and nsfw, defaults to nsfw.
* Dictionary is configurable via `HUBOT_DOMAIN_ME_SFW` environment variable.
* The code is considerably cleaner.

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
