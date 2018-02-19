module.exports = function (url, options) {
    options = options || {};

    // Send cookies
    options.credentials = 'include';

    // Send CSRF token
    options.headers = options.headers || {};
    options.headers['requesttoken'] = OC.requestToken;

    // Send correct AJAX header
    options.headers['X-Requested-With'] = 'XMLHttpRequest';

    return fetch(url, options);
};
