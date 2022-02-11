console.log('Service worker loaded send push...');

self.addEventListener('push', () => {
     self.registration.showNotification('we received a message abc', {
        body: 'kkk',
        icon: '/plus.ico'
    });

});
   