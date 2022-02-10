var push = require("web-push");

let vapiKeys = {
 publicKey: 'BOH4HvtQB7n8-6O848rNDb-0ehwPF2MwiI5rlKzwwuBofVO90Zl02BT7W1GQmk2iSGDS5PLzGeuY3SQxrokGJRQ',
  privateKey: 'Dzt3WAubTtM3e2Pzxva0LkxSNOUqHc2YLuMv-Dwn0ek'
};
/*
let vapiKeys = push.generateVAPIDKeys();

console.log(vapiKeys);
*/
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

console.log('test message');
push.sendNotification(sub, "Test message");