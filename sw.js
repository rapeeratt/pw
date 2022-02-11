console.log('Service worker loaded send push...');

self.addEventListener('push', () => {
     self.registration.showNotification('Hello world!', {
        body: 'Notify by me',
        icon: './plus.ico'
    });

});
   