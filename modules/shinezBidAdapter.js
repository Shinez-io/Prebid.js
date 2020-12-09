/* eslint-disable */
import { registerBidder } from '../src/adapters/bidderFactory.js';

const TARGET_URL = "https://shinez-ssp.shinez.workers.dev/prebid"

function isBidRequestValid(bid) {
  return bid && bid.params && bid.params.placementId;
}

function buildRequests(validBidRequests, bidderRequest) {

  const requests = validBidRequests.map(req => {
    const payload = {
      bidId: req.bidId,                         // Id unique for current request
      transactionId: req.transactionId,         // Unique for every AdUnit, but common for all bid requests 
      crumbs: req.crumbs,                       // Publisher Common ID Module (https://docs.prebid.org/dev-docs/modules/pubCommonId.html)
      fpd: req.fpd,                             // First Party Data: https://docs.prebid.org/dev-docs/publisher-api-reference.html#setConfig-fpd
      mediaTypes: req.mediaTypes,               // https://docs.prebid.org/dev-docs/adunit-reference.html#adunitmediatypes
      placementId: req.params.placementId,      // Some kind of unique identifier for OUR usage
      refererInfo: bidderRequest.refererInfo    // https://docs.prebid.org/dev-docs/bidder-adaptor.html#referrers
    };

    const request = {
      method: 'POST',
      url: new URL(TARGET_URL),
      data: payload
    };

    return request;
  });

  return requests;
}

function interpretResponse(serverResponse, request) {
  try {
    //TODO: Should we validate ourself here?
    const bids = serverResponse.body.map(t => {
      t.requestId = t.bidId;
      return t;
    });
    return bids;
  } catch (e) {
    //TODO: Remove before release
    console.log(e);
  }
}

export const spec = {
  code: "shinez",
  version: "1.0.0",
  supportedMediaTypes: ['banner'],
  isBidRequestValid: isBidRequestValid,
  buildRequests: buildRequests,
  interpretResponse: interpretResponse,
};

registerBidder(spec);