# user-device-type

**Browser, OS, and device detection based on the available user agent string. Can be used both in a browser (also as a standalone script) or in a server environment.**

*It's very rarely a good idea to use user agent sniffing. You can almost always find a better, more broadly compatible way to solve your problem! MDN: [Browser detection using the user agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)*

**Note:** user-device-type is written in Javascript and includes all the necessary typings, making it usable in both JavaScript and TypeScript projects.

## Why use it

In cases where some device-specific issues cannot be fixed uniformly across devices, we may need to perform device detection. For example, certain features might be disabled or enabled based on whether the user is on a mobile, tablet, desktop, wearable, or TV device.

## What is recognized

### Devices
- Mobile
- Tablet
- Desktop
- Wearable
- TV

## Installation

### NPM
To install the library use npm:

```sh
npm install user-device-type
```

## How to use on the server side
 
```sh
const { getDeviceType } = require("user-device-type");

const userAgent = "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25";
const deviceType = getDeviceType(userAgent);

console.log('Device type:', deviceType);  // Outputs: 'tablet'
```

## How to use in a browser
 
```sh
import { getDeviceType } from "user-device-type";

const userAgent = navigator.userAgent;
const deviceType = getDeviceType(userAgent);

console.log('Device type:', deviceType);  // Outputs: 'mobile', 'tablet', 'desktop', 'wearable', or 'tv'

```

# API

**getDeviceType(userAgent: string): string:** Function that expects a user agent string as an argument and returns the device type ('mobile', 'tablet', 'desktop', 'wearable', or 'tv').

## Other libraries

Some libraries provide only browser information and not the device type. user-device-type offers a simple and symmetric API, does not depend on other libraries, is tiny, fast, and easily extensible. Additionally, it can be used in both browser and server environments.

