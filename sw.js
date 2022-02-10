console.log('Service worker loaded send push...');

self.addEventListener('push', () => {
     self.registration.ShowNotification('Hello world!', {
        body: 'Notify by me'
    });

});
   