console.log('Service worker loaded send push...');

self.addEventListener('push', () => {
     self.registration.showNotification('we received a message', {
        body: 'Notify by me',
        icon: './plus.ico'
    });

});
   