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
    "endpoint": "https://fcm.googleapis.com/fcm/send/cZN_bHWczOE:APA91bGBEJU4HDS8HoF0HMY24G2898soYL1Jh3P7hluhyCMMOKmCo_kKq_AXUMvlQGkre9rGCuuytaCkB1ch1flCPMknnL2KAmcnOxElYnyFwDqWezFL9OxtRo9XaSlW3iExQ7e7_gGO",
    "expirationTime": null,
    "keys": {
        "p256dh": "BNOMm_WZGRkLSeYGtnPYOYo4eL_84oP7slXNdF9Wb0y13MLr_80so0ziSBjBGb-6ztAj9CdySaXCW0Q_fH9xsnE",
        "auth": "v74PCk_tqeOpIlk539sYtA"
    }
};

console.log('test message');
push.sendNotification(sub, "Test message");