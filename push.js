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
    "endpoint": "https://fcm.googleapis.com/fcm/send/fzzTVbbd-gg:APA91bFC8ybHIgjAXGPpBQdR8cjTKEiS5xHXuVmJDJSrNRNTo759vc2UjYyMSDjTMvxBU-HImGcxGaJcuLm8pfpykBFJM47CTvXrreiECmPyssxO4qUARmV9NpH_M1iHwNYLmqlGg35S",
    "expirationTime": null,
    "keys": {
        "p256dh": "BMD39KtU3kHr3WDaqoBuwdpeqd9t-QEWqxh9stiQqux9DgbAsTAbBTS6Dd8bXE0ycl-MBM_cerZ5pMfQxEjUqyE",
        "auth": "czuifT5RFOeLGTumIIBBGQ"
    }
};

push.sendNotification(sub, "Test message");