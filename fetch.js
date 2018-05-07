export function nc_fetch(url, options) {
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

export function nc_fetch_json(url, options) {
    options = options || {};

    options.headers = options.headers || {};
    options.headers['Accept'] = 'application/json';
    options.headers['Content-Type'] = 'application/json';
    options.headers['requesttoken'] = OC.requestToken;

    return nc_fetch(url, options);
};
