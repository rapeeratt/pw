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
let sub = {
        "endpoint": "https://fcm.googleapis.com/fcm/send/dAXDTfRJhng:APA91bGVoyiKAsm3GmteuAL1DHpNN1r6jM5pNup8ayRBTI6hSHsCFQyGDPYtUBFycIUlALdYjkyazcCKpqsbXjQx4enhkHvO5iImbkEA1SGNLR1zMblYHzqij4tbxTweC9rEfLB-P8Pt",
        "expirationTime": null,
        "keys": {
            "p256dh": "BPXwHP5af4udIbONbCDulTebgo1kWc_6uQHhypVsDjNP1TE1-D1PUa1R_bAbON8KSO-FzL-OA3rbaZ_qMwcoBME",
            "auth": "IvPOsHTAHbPRjaqDmZOJCg"
        }};

        push.sendNotification(sub, "Test message");