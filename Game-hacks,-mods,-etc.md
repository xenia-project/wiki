# Ultrawide (21:9, 32:9, etc)

**THIS WILL NOT INCREASE RESOLUTION**

Ultrawide (21:9, 32:9, etc) hacks are possible. This [guide](https://forums.rpcs3.net/thread-199065.html) is for rpcs3, but is applicable to Xenia.

Some games like Halo 3 have a more convenient method that doesn't require Cheat Engine (recommended to backup default.xex):

1. Decrypt and decompress default.xex with xextool (game must be extracted first)

2. Replace all `3F E3 8E 39` in default.xex with the [desired aspect ratio (Formatted Value)](http://www.wsgf.org/article/common-hex-values) in reverse order using a hex editor. For example, `39 8E 63 40` (32:9) would become `40 63 8E 39`*

*This won't work for all games. The Cheat Engine method has higher compatibility.*
