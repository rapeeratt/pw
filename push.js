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
    "endpoint": "https://fcm.googleapis.com/fcm/send/dAXDTfRJhng:APA91bGVoyiKAsm3GmteuAL1DHpNN1r6jM5pNup8ayRBTI6hSHsCFQyGDPYtUBFycIUlALdYjkyazcCKpqsbXjQx4enhkHvO5iImbkEA1SGNLR1zMblYHzqij4tbxTweC9rEfLB-P8Pt",
    "expirationTime": null,
    "keys": {
        "p256dh": "BPXwHP5af4udIbONbCDulTebgo1kWc_6uQHhypVsDjNP1TE1-D1PUa1R_bAbON8KSO-FzL-OA3rbaZ_qMwcoBME",
        "auth": "IvPOsHTAHbPRjaqDmZOJCg"
    }
};

console.log('test message');
push.sendNotification(sub, "Test message");