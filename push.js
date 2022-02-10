var push = require("web-push");

let vapiKeys = {
  publicKey: 'BOkXeAtRnXWqfrNs9Cla1d4UoPjvUbhgYqyJm_OJHm7BU2Z0ZOpWNlyandmibawc0oV2axEGMiTZA7_goY4V4SU',
  privateKey: 'r4xfZjXiS2o1NOUHGFMqWlyqM3lAJtp8s-hrR9nW2dY'
};
//let vapiKeys = push.generateVAPIDKeys();

//console.log(vapiKeys);

push.setVapidDetails(
  'mailto:ratti222@gmail.com',
  vapiKeys.publicKey,
  vapiKeys.privateKey
);
//let sub = {};

//push.sendNotification(sub, "Test message");