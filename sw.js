console.log('Service worker loaded send push...');

self.addEventListener('push', e => {

    self.registration.showNotification('Hello world!', {
        body: 'Notify by me'
    });
});