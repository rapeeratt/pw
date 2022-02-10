console.log('Service worker loaded send push...');

self.addEventListener('push', () => {
     self.registration.sendNotification('Hello world!', {
        body: 'Notify by me'
    });

});
   