# nextcloud_fetch
Thin wrapper around modern browser's [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for Nextcloud.

## Usage

Install the package via npm
```bash
npm install --save nextcloud_fetch
```

Send requests to your Nextcloud server
```js
let nc_fetch = require('nextcloud_fetch')

let res = nc_fetch('…')
```
