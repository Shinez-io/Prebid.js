# Overview

**Module Name:** Shinez Bidder Adapter

**Module Type:** Bidder Adapter

**Maintainer:** tech-team@shinez.io

# Description

Module that connects to Shinez's demand sources.
 
# Test Parameters
```js
var adUnits = [
 {
    code: 'test-ad',
    sizes: [[300, 250]],
    bids: [
      {
        bidder: 'shinez',
        params: {
          placementId: "00000000"
        }
      }
    ]
  }
];
```
