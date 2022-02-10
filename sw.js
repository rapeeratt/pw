console.log('Service worker loaded...');

self.addEventListener('push', e => {

    self.registration.showNotification('Hello world!', {
        body: 'Notify by me'
    });
});