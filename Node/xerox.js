var open = require('open');
open('http://www.google.com');open('http://www.google.com', function (err) {
  if (err) throw err;
  console.log('The user closed the browser');
});

