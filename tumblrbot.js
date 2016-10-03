console.log('It lives!');

var tumblr = require('tumblr.js');
var config = require('./tumblrConfig');
var timer = require('./timer');
var fs = require('fs');
var exec = require('child_process').exec;
var client = tumblr.createClient(config);

postTumblr();
setInterval(postFlickr, timer.milliseconds*timer.seconds*timer.minutes*timer.hours);


function postTumblr(); {
  var cmd = 'processing_tumblr/processing_tumblr';
  exec (cmd, processing);

  function processing() {
    console.log('Encoding image as base64...');
    var filename = 'processing_tumblr/output.png';
    var params = {
      encoding: 'base64'
    }
    var b64 = fs.readFileSync(filename, params);

    var options = {
      data64: b64,
      caption: 'This is an example of a caption text',
      tags: 'this_is_a_tag, another_tag, tags_etc'
    };

    client.createPhotoPost('cellendipity', options, posted);

    function posted(err, success) {
      if (err) {
        console.log("Something went wrong!   " + err);
      }
      else {
        console.log("It worked!");
      }
    }
  }
}
