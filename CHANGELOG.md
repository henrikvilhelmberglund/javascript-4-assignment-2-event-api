# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 0.0.1 (2023-11-23)


### Features:

* test spamming ([5876683](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/5876683e3cabd640ca0d2b0e6f4a5e06c89cf1f9))
* add error handling for receiving post with <1 tickets, make arrow functions into normal functions ([6596a5f](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/6596a5f196452e7161030b1ff6f7028730b09493))
* implement deleteTicket with DELETE ([9c24678](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/9c246786d6f1a5a7d44d85373f7c4d3cd6893b04))
* implement GET for /tickets ([d6b19dd](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/d6b19dd79c1f7f975d0432706b5654bdaac737c5))
* add method, body, content type, handle 201 status ([87dd96b](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/87dd96b8dffa26497fba1d7e2b2c7de108d88aa8))
* add /tickets route that uses postTickets ([70f8f00](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/70f8f00f1874aa783b98494e0f57d4bc102891bf))
* add postTickets controller for handling post to /tickets ([4a54c49](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/4a54c49aaead08b8541d39560103a7248d8a4618))
* add express.json() middleware for parsing body ([63206c9](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/63206c901b510acb6a1c01503b4bff4e8f94cd45))
* add tickets route in json-server ([f8ebcc9](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/f8ebcc9edf67f756d4132eafd00e745ad59696ee))
* add mock descriptions ([3f33bd9](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/3f33bd9c93198fabc7875698a353b8c4e29a7ffe))
* optimize for event ([aadbdc3](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/aadbdc3fa8b57bee6f277b9fa92693f46d152be0))
* add commit-and-tag-version ([c8d230e](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/c8d230e3d0030f6320a75f65529eff2255a50a48))


### Bug Fixes

* fix nodemon script to not reload express on mock.json changes to avoid crashes when spamming api calls ([2e93557](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/2e9355725fa6f7158fea38bb71acc41accae0594))
* prevent body from being sent in GET requests ([7988367](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/7988367069dc37bcba76614c4ac578c43f15f313))


### Chore: Maintenance

* package lock ([24865e3](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-api/commit/24865e3bfe759ccd83d33a8125ebb87ee277bd75))
