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

    "endpoint": "https://fcm.googleapis.com/fcm/send/ebn3b3aFanc:APA91bGHj48CrBCp7FEkKCxMUwJLbGUQraRrsCoviBYkfZFVFItoVNYXd9eeCDjmhXDOtG9Y3h0nOCXjsWWoilw1GwO6mylkoD8yQeIRD7c0PxffNAOuDEXo6nhY5UM2xRdWiTkYHjx2",
    "expirationTime": null,
    "keys": {
        "p256dh": "BDBXf6Qyz-Pb-ns7xKamTOO06g1MVssVaGOcMR2IYmoXeCKs2ovthigugSJgcjcYsTOxYYKqHXrM60KHJyYg7IE",
        "auth": "CE4gb_-6Bj3EGTvpcotWfA"
    }

};

console.log('test message');
push.sendNotification(sub, "Test message");