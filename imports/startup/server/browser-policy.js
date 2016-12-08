import { BrowserPolicy } from 'meteor/browser-policy-common';
BrowserPolicy.content.allowOriginForAll( '*.googleapis.com' );
BrowserPolicy.content.allowOriginForAll( '*.gstatic.com' );