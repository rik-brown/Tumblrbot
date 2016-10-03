# tumblrbot
Simple bot for posting Processing image files to a Tumblr account (inspired by Dan Shiffman's excellent  <a href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV">twitterbot tutorial</a>).

This is a bot built to run in node.js using the handy <a href="https://github.com/tumblr/tumblr.js/">tumblr.js package</a>.

It assumes that full authentication data is aquired from Tumblr using the relevant procedure <a href="https://www.tumblr.com/docs/en/api/v2">(more info here)</a>.

More details on uploading images to Flickr <a href="https://tumblr.github.io/tumblr.js/TumblrClient.html#.createPhotoPost">can be found here</a>.

My cellendipity tumblrbot is running on an Amazon EC2 server and posting to <a href="http://cellendipity.tumblr.com/">this account</a>.

The example included here will create & upload a new image once every 24 hours.

I have included two examples of the main bot.js code: one suited for running in linux on an EC2 server, and the one I use when testing on a windows machine.

