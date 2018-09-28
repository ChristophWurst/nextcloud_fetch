# nextcloud_fetch

Thin wrapper around modern browser's [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for Nextcloud.

**Deprecated: Use [nextcloud-axios](https://www.npmjs.com/package/nextcloud-axios) instead.**

[![npm](https://img.shields.io/npm/v/nextcloud_fetch.svg)](https://www.npmjs.com/package/nextcloud_fetch)

## Usage

Install the package via npm
```bash
npm install --save nextcloud_fetch
```

Send (JSON) requests to your Nextcloud server
```js
import { nc_fetch, nc_fetch_json } from 'nextcloud_fetch'

let res = nc_fetch('https://...')
let json_res = nc_fetch_json('https://...')
```
